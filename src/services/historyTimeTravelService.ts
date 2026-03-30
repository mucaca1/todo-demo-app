/**
 * History Time Travel Service - Business logic for time travel feature
 *
 * This service handles loading, processing, and navigating through the
 * complete history of a todo object. It fetches data from Evolu's internal
 * evolu_history table and processes it into snapshots and timeline entries.
 *
 * This service now uses the universal history system internally while
 * maintaining backward compatibility with the existing API.
 */

import { useState, useCallback } from "react";
import { useEvolu } from "../evolu-init";
import { todoAllColumnsHistory, todoTagHistory, MessageTableNotFoundError, timestampToMillis } from "../evolu/evolu-history";
import { TodoId } from "../types/todo";
import { TagId } from "../types/tag";
import {
  TodoSnapshot,
  TimelineEntry,
  FieldChange,
  HistoryState,
} from "../types/historyTimeTravel";
import {
  mergeHistoryToSnapshots as universalMergeHistoryToSnapshots,
  compareSnapshots,
} from "./universalHistoryService";
import type { ObjectSnapshot } from "../types/universalHistory";
import * as Evolu from "@evolu/common";

/**
 * Columns to track history for
 */
const TRACKED_COLUMNS = ["title", "description", "isCompleted", "completeAt"] as const;

/**
 * TodoTag history row type
 */
type TodoTagHistoryRow = {
  rowId: Uint8Array;
  column: string;
  value: unknown;
  timestamp: Uint8Array;
};

/**
 * Tag change event representing a tag being added or removed
 */
interface TagChangeEvent {
  timestamp: number;
  tagId: TagId;
  tagName: string;
  action: "added" | "removed";
}

/**
 * Fetch tag names for a set of tag IDs
 *
 * @param tagIds - Array of tag IDs to fetch names for
 * @returns Map of tagId to tag name
 */
async function fetchTagNames(
  loadQuery: ReturnType<typeof useEvolu>["loadQuery"],
  tagIds: TagId[]
): Promise<Map<TagId, string>> {
  if (tagIds.length === 0) return new Map();

  // Query all tags
  const tagQuery = loadQuery(Evolu.createQuery((db) =>
    db
      .selectFrom("tag")
      .select(["id", "name"])
      .where("isDeleted", "is not", Evolu.sqliteTrue)
  ));

  const tags = await tagQuery as unknown as Array<{ id: TagId; name: string }>;

  const tagMap = new Map<TagId, string>();
  for (const tag of tags) {
    if (tagIds.includes(tag.id)) {
      tagMap.set(tag.id, tag.name);
    }
  }

  return tagMap;
}

/**
 * Process todoTag history to extract tag change events
 *
 * This function analyzes the todoTag table history to find when tags were
 * added or removed from a specific todo. It handles:
 * - New todoTag rows being created (tag added)
 * - todoTag rows being deleted (tag removed)
 * - todoTag rows being updated (e.g., isDeleted flag changes)
 *
 * @param todoId - The todo ID to get tag changes for
 * @param todoTagHistoryRows - All todoTag history rows
 * @param tagNames - Map of tagId to tag name for formatting
 * @returns Array of tag change events sorted by timestamp
 */
function processTagHistory(
  todoId: TodoId,
  todoTagHistoryRows: TodoTagHistoryRow[],
  tagNames: Map<TagId, string>
): TagChangeEvent[] {
  // Group todoTag history by rowId (each todoTag row has a unique rowId)
  const rowHistory = new Map<string, TodoTagHistoryRow[]>();

  for (const row of todoTagHistoryRows) {
    const rowIdKey = Evolu.idBytesToId(row.rowId as Evolu.IdBytes);
    if (!rowHistory.has(rowIdKey)) {
      rowHistory.set(rowIdKey, []);
    }
    rowHistory.get(rowIdKey)!.push(row);
  }

  const tagChanges: TagChangeEvent[] = [];

  // Process each todoTag row's history
  for (const [rowId, history] of rowHistory.entries()) {
    // Sort history by timestamp ascending (oldest first)
    const sortedHistory = history.sort((a, b) =>
      timestampToMillis(a.timestamp) - timestampToMillis(b.timestamp)
    );

    let currentTodoId: TodoId | null = null;
    let currentTagId: TagId | null = null;
    let isDeleted = 0; // 0 = not deleted, 1 = deleted
    let lastChangeTimestamp = 0;

    // Track the lifecycle of this todoTag row
    for (const change of sortedHistory) {
      const timestamp = timestampToMillis(change.timestamp);

      if (change.column === "todoId") {
        currentTodoId = change.value as TodoId;
      } else if (change.column === "tagId") {
        currentTagId = change.value as TagId;
      } else if (change.column === "isDeleted") {
        isDeleted = change.value as number;
      }

      lastChangeTimestamp = timestamp;

      // Check if this row belongs to our todo and we have enough info
      if (currentTodoId === todoId && currentTagId) {
        const tagName = tagNames.get(currentTagId) ?? currentTagId;

        // If this is a new row (first change) and not deleted, it's a tag add
        if (change === sortedHistory[0] && isDeleted === 0) {
          tagChanges.push({
            timestamp,
            tagId: currentTagId,
            tagName,
            action: "added",
          });
        }
        // If the isDeleted flag changed to 1, it's a tag remove
        else if (change.column === "isDeleted" && isDeleted === 1) {
          tagChanges.push({
            timestamp,
            tagId: currentTagId,
            tagName,
            action: "removed",
          });
        }
        // If the isDeleted flag changed from 1 to 0 (undone), it's a tag add
        else if (change.column === "isDeleted" && isDeleted === 0) {
          tagChanges.push({
            timestamp,
            tagId: currentTagId,
            tagName,
            action: "added",
          });
        }
      }
    }
  }

  // Sort tag changes by timestamp ascending
  return tagChanges.sort((a, b) => a.timestamp - b.timestamp);
}

/**
 * History query result row type
 */
type HistoryRow = {
  column: string;
  value: unknown;
  timestamp: Uint8Array;
};

/**
 * Merge column histories into snapshots sorted by timestamp
 *
 * This function now uses the universal history service to merge
 * historical changes into snapshots. It then converts the universal
 * snapshots to the legacy TodoSnapshot format for backward compatibility.
 *
 * @param todoId - The todo ID
 * @param historyRows - All history rows from the database
 * @param tagChanges - Tag change events to merge with todo history
 * @returns Array of TodoSnapshots sorted by timestamp ascending (oldest first)
 */
function mergeHistoryToSnapshots(
  todoId: TodoId,
  historyRows: HistoryRow[],
  tagChanges: TagChangeEvent[] = []
): TodoSnapshot[] {
  // Use the universal merge function
  const universalSnapshots = universalMergeHistoryToSnapshots(
    historyRows,
    todoId,
    "todo",
    TRACKED_COLUMNS
  );

  // Convert universal snapshots to legacy TodoSnapshot format
  const todoSnapshots: TodoSnapshot[] = universalSnapshots.map((snapshot) => ({
    id: snapshot.id as TodoId,
    title: (snapshot.data.title as string | null) ?? null,
    description: (snapshot.data.description as string | null) ?? null,
    isCompleted: (snapshot.data.isCompleted as number | null) ?? 0,
    completeAt: (snapshot.data.completeAt as string | null) ?? null,
    tags: [], // Will be populated below
    timestamp: snapshot.timestamp,
  }));

  // Merge tag changes into the timeline
  // We need to insert tag changes as new snapshots or merge them with existing ones
  if (tagChanges.length > 0) {
    // Create a map of existing timestamps for quick lookup
    const timestampMap = new Map<number, TodoSnapshot>();
    for (const snapshot of todoSnapshots) {
      timestampMap.set(snapshot.timestamp, snapshot);
    }

    // Create combined timeline with both todo changes and tag changes
    const allTimestamps = new Set<number>();
    for (const snapshot of todoSnapshots) {
      allTimestamps.add(snapshot.timestamp);
    }
    for (const change of tagChanges) {
      allTimestamps.add(change.timestamp);
    }

    // Sort timestamps
    const sortedTimestamps = Array.from(allTimestamps).sort((a, b) => a - b);

    // Rebuild snapshots with tag state
    const mergedSnapshots: TodoSnapshot[] = [];
    const currentTags = new Set<TagId>();

    for (const timestamp of sortedTimestamps) {
      // Apply tag changes that happened at or before this timestamp
      for (const change of tagChanges) {
        if (change.timestamp <= timestamp) {
          // This is a simplification - we need to track the exact order
          // For now, we'll rebuild the tag state from scratch at each timestamp
        }
      }

      // Get the todo snapshot at this timestamp (or the closest one before)
      const todoSnapshot = timestampMap.get(timestamp);
      if (todoSnapshot) {
        // This is a todo change snapshot
        // Calculate tag state at this point
        const tagsAtThisPoint = new Set<TagId>();
        for (const change of tagChanges) {
          if (change.timestamp <= timestamp) {
            if (change.action === "added") {
              tagsAtThisPoint.add(change.tagId);
            } else if (change.action === "removed") {
              tagsAtThisPoint.delete(change.tagId);
            }
          }
        }
        todoSnapshot.tags = Array.from(tagsAtThisPoint);
        mergedSnapshots.push(todoSnapshot);
      } else {
        // This is a tag-only change - create a new snapshot
        // Copy the previous todo state
        const prevSnapshot = mergedSnapshots[mergedSnapshots.length - 1];
        const tagsAtThisPoint = new Set<TagId>();
        for (const change of tagChanges) {
          if (change.timestamp <= timestamp) {
            if (change.action === "added") {
              tagsAtThisPoint.add(change.tagId);
            } else if (change.action === "removed") {
              tagsAtThisPoint.delete(change.tagId);
            }
          }
        }

        mergedSnapshots.push({
          id: todoId,
          title: prevSnapshot?.title ?? null,
          description: prevSnapshot?.description ?? null,
          isCompleted: prevSnapshot?.isCompleted ?? 0,
          completeAt: prevSnapshot?.completeAt ?? null,
          tags: Array.from(tagsAtThisPoint),
          timestamp,
        });
      }
    }

    return mergedSnapshots;
  }

  // Ensure we have at least one snapshot (the current state)
  if (todoSnapshots.length === 0) {
    todoSnapshots.push({
      id: todoId,
      title: null,
      description: null,
      isCompleted: 0,
      completeAt: null,
      tags: [],
      timestamp: Date.now(),
    });
  }

  return todoSnapshots;
}

/**
 * Create timeline entries from snapshots
 *
 * Timeline entries group field changes by timestamp and include
 * old/new values for each changed field.
 *
 * @param snapshots - All snapshots sorted by timestamp ascending
 * @returns Array of timeline entries sorted newest first (for display)
 */
function createTimelineEntries(snapshots: TodoSnapshot[]): TimelineEntry[] {
  if (snapshots.length === 0) {
    return [];
  }

  const entries: TimelineEntry[] = [];

  for (let i = 0; i < snapshots.length; i++) {
    const current = snapshots[i];
    const previous = i > 0 ? snapshots[i - 1] : null;

    const changes: FieldChange[] = [];

    // Compare with previous snapshot to find what changed
    if (previous === null) {
      // This is the first snapshot - it's the creation
      // All fields are considered "new"
      changes.push(
        { column: "title", oldValue: null, newValue: current.title },
        { column: "description", oldValue: null, newValue: current.description },
        { column: "isCompleted", oldValue: null, newValue: current.isCompleted },
        { column: "completeAt", oldValue: null, newValue: current.completeAt },
        { column: "tags", oldValue: null, newValue: current.tags }
      );
    } else {
      // Find differences from previous snapshot
      if (previous.title !== current.title) {
        changes.push({
          column: "title",
          oldValue: previous.title,
          newValue: current.title,
        });
      }
      if (previous.description !== current.description) {
        changes.push({
          column: "description",
          oldValue: previous.description,
          newValue: current.description,
        });
      }
      if (previous.isCompleted !== current.isCompleted) {
        changes.push({
          column: "isCompleted",
          oldValue: previous.isCompleted,
          newValue: current.isCompleted,
        });
      }
      if (previous.completeAt !== current.completeAt) {
        changes.push({
          column: "completeAt",
          oldValue: previous.completeAt,
          newValue: current.completeAt,
        });
      }

      // Check for tag changes
      const prevTags = new Set(previous.tags ?? []);
      const currTags = new Set(current.tags ?? []);

      // Find added tags
      for (const tag of currTags) {
        if (!prevTags.has(tag)) {
          changes.push({
            column: "tags",
            oldValue: Array.from(prevTags),
            newValue: [...Array.from(prevTags), tag],
          });
          break; // Only show one "tags" change entry
        }
      }

      // Find removed tags
      for (const tag of prevTags) {
        if (!currTags.has(tag)) {
          changes.push({
            column: "tags",
            oldValue: Array.from(prevTags),
            newValue: Array.from(currTags),
          });
          break; // Only show one "tags" change entry
        }
      }
    }

    // Only include entries that have actual changes (should always be true)
    if (changes.length > 0) {
      entries.push({
        timestamp: current.timestamp,
        date: new Date(current.timestamp),
        changes,
      });
    }
  }

  // Return sorted newest first for display
  return entries.reverse();
}

/**
 * History Time Travel Service Hook
 *
 * Provides functions to load history and navigate through snapshots.
 * Uses React state management for the current history state.
 *
 * @example
 * ```tsx
 * const {
 *   historyState,
 *   loadTodoHistory,
 *   goBack,
 *   goForward,
 *   jumpToSnapshot,
 *   resetHistory
 * } = useHistoryTimeTravel();
 *
 * // Load history when opening dialog
 * await loadTodoHistory(todoId);
 *
 * // Navigate
 * goBack();
 * goForward();
 * jumpToSnapshot(2);
 * ```
 */
export function useHistoryTimeTravel() {
  const { loadQuery } = useEvolu();
  const [historyState, setHistoryState] = useState<HistoryState | null>(null);

  /**
   * Load complete history for a todo and compute all snapshots
   *
   * @param todoId - The todo ID to load history for
   * @returns Promise resolving when history is loaded
   */
  const loadTodoHistory = useCallback(async (todoId: TodoId): Promise<void> => {
    try {
      // Query all columns history for this todo
      const query = todoAllColumnsHistory(todoId);
      const result = await loadQuery(query);

      // Type assertion for the query result
      const historyRows = result as unknown as HistoryRow[];

      // Query todoTag history for tag changes
      let tagChanges: TagChangeEvent[] = [];
      try {
        const tagHistoryQuery = todoTagHistory(todoId);
        const tagHistoryResult = await loadQuery(tagHistoryQuery);
        const tagHistoryRows = tagHistoryResult as unknown as TodoTagHistoryRow[];

        // Extract unique tag IDs from the history
        const tagIds = new Set<TagId>();
        for (const row of tagHistoryRows) {
          if (row.column === "tagId") {
            tagIds.add(row.value as TagId);
          }
        }

        // Fetch tag names for formatting
        const tagNames = await fetchTagNames(loadQuery, Array.from(tagIds));

        // Process tag history to extract change events
        tagChanges = processTagHistory(todoId, tagHistoryRows, tagNames);
      } catch (tagError) {
        console.warn("Failed to load tag history:", tagError);
        // Continue without tag history
        tagChanges = [];
      }

      // Merge into snapshots (including tag changes)
      const snapshots = mergeHistoryToSnapshots(todoId, historyRows, tagChanges);

      // Set initial state at the latest snapshot (current state)
      const lastIndex = snapshots.length - 1;

      setHistoryState({
        todoId,
        currentSnapshot: snapshots[lastIndex] ?? null,
        currentIndex: lastIndex,
        snapshots,
        canGoBack: lastIndex > 0,
        canGoForward: false, // Always start at the latest
      });
    } catch (error) {
      console.error("Failed to load todo history:", error);

      // Check if this is a "no such table" error
      const errorMessage = error instanceof Error ? error.message : String(error);
      if (errorMessage.includes("no such table") || errorMessage.includes("evolu_history")) {
        // Show a user-friendly error message
        alert(
          "History feature not available:\n\n" +
          "The time-travel feature requires a database update. " +
          "Please go to Settings > Danger Zone and click 'Delete Account' " +
          "to reset the database and enable this feature.\n\n" +
          "Note: This will delete all your local data."
        );
      }

      // Set empty state on error
      setHistoryState({
        todoId,
        currentSnapshot: null,
        currentIndex: 0,
        snapshots: [],
        canGoBack: false,
        canGoForward: false,
      });
    }
  }, [loadQuery]);

  /**
   * Navigate to previous snapshot (back in time)
   */
  const goBack = useCallback(() => {
    setHistoryState((prev) => {
      if (!prev || prev.currentIndex <= 0) return prev;

      const newIndex = prev.currentIndex - 1;
      return {
        ...prev,
        currentIndex: newIndex,
        currentSnapshot: prev.snapshots[newIndex],
        canGoBack: newIndex > 0,
        canGoForward: true,
      };
    });
  }, []);

  /**
   * Navigate to next snapshot (forward in time)
   */
  const goForward = useCallback(() => {
    setHistoryState((prev) => {
      if (!prev || prev.currentIndex >= prev.snapshots.length - 1) return prev;

      const newIndex = prev.currentIndex + 1;
      return {
        ...prev,
        currentIndex: newIndex,
        currentSnapshot: prev.snapshots[newIndex],
        canGoBack: true,
        canGoForward: newIndex < prev.snapshots.length - 1,
      };
    });
  }, []);

  /**
   * Jump directly to a specific snapshot index
   *
   * @param index - The snapshot index to jump to
   */
  const jumpToSnapshot = useCallback((index: number) => {
    setHistoryState((prev) => {
      if (!prev || index < 0 || index >= prev.snapshots.length) return prev;

      return {
        ...prev,
        currentIndex: index,
        currentSnapshot: prev.snapshots[index],
        canGoBack: index > 0,
        canGoForward: index < prev.snapshots.length - 1,
      };
    });
  }, []);

  /**
   * Reset history state (e.g., when closing dialog)
   */
  const resetHistory = useCallback(() => {
    setHistoryState(null);
  }, []);

  /**
   * Get timeline entries from current snapshots
   * Returns entries sorted newest first for display
   */
  const getTimelineEntries = useCallback((): TimelineEntry[] => {
    if (!historyState) return [];
    return createTimelineEntries(historyState.snapshots);
  }, [historyState]);

  /**
   * Check if the current snapshot is the latest (current state)
   */
  const isCurrentState = useCallback((): boolean => {
    if (!historyState) return false;
    return historyState.currentIndex === historyState.snapshots.length - 1;
  }, [historyState]);

  return {
    /** Current history state */
    historyState,
    /** Load history for a todo */
    loadTodoHistory,
    /** Navigate to previous snapshot */
    goBack,
    /** Navigate to next snapshot */
    goForward,
    /** Jump to a specific snapshot index */
    jumpToSnapshot,
    /** Clear history state */
    resetHistory,
    /** Get timeline entries (newest first) */
    getTimelineEntries,
    /** Check if at current state */
    isCurrentState,
  };
}

/**
 * Type exports for use in components
 */
export type { HistoryState, TodoSnapshot, TimelineEntry, FieldChange };

/**
 * Todo History Configuration
 *
 * Configuration object for using the universal history system with Todo objects.
 * This can be used with UniversalHistoryDialog and UniversalHistoryTable.
 */
import { formatCompletionStatus, formatDate } from "../utils/fieldFormatters";
import type { HistoryConfig, ObjectSnapshot } from "../types/universalHistory";

export const todoHistoryConfig: HistoryConfig = {
  tableName: "todo",
  columns: [...TRACKED_COLUMNS, "tags"],
  fieldLabels: {
    title: "Title",
    description: "Description",
    isCompleted: "Status",
    completeAt: "Completion Date",
    tags: "Tags",
  },
  valueFormatters: {
    isCompleted: formatCompletionStatus,
    completeAt: (value) => formatDate(value, undefined),
    tags: (value) => {
      if (!Array.isArray(value)) return "None";
      if (value.length === 0) return "None";
      return `${value.length} tag${value.length > 1 ? "s" : ""}`;
    },
  },
};

/**
 * Convert TodoSnapshot to ObjectSnapshot for use with universal components
 *
 * @param todoSnapshot - Legacy TodoSnapshot
 * @returns Universal ObjectSnapshot
 */
export function todoSnapshotToObjectSnapshot(
  todoSnapshot: TodoSnapshot
): ObjectSnapshot {
  return {
    id: todoSnapshot.id,
    tableName: "todo",
    data: {
      title: todoSnapshot.title,
      description: todoSnapshot.description,
      isCompleted: todoSnapshot.isCompleted,
      completeAt: todoSnapshot.completeAt,
      tags: todoSnapshot.tags,
    },
    timestamp: todoSnapshot.timestamp,
    version: 0, // Will be set by caller
  };
}
