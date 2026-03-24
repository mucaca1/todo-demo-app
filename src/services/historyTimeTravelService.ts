/**
 * History Time Travel Service - Business logic for time travel feature
 *
 * This service handles loading, processing, and navigating through the
 * complete history of a todo object. It fetches data from Evolu's internal
 * evolu_message table and processes it into snapshots and timeline entries.
 */

import { useState, useCallback } from "react";
import { useEvolu } from "../evolu-init";
import { todoAllColumnsHistory, timestampToMillis, MessageTableNotFoundError } from "../evolu/evolu-history";
import { TodoId } from "../types/todo";
import {
  TodoSnapshot,
  TimelineEntry,
  FieldChange,
  HistoryState,
} from "../types/historyTimeTravel";

/**
 * Columns to track history for
 */
const TRACKED_COLUMNS = ["title", "description", "isCompleted", "completeAt"] as const;

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
 * This function takes all historical changes for all columns and merges them
 * into discrete snapshots. Each snapshot represents the state of the todo
 * at a specific point in time.
 *
 * @param todoId - The todo ID
 * @param historyRows - All history rows from the database
 * @returns Array of snapshots sorted by timestamp ascending (oldest first)
 */
function mergeHistoryToSnapshots(
  todoId: TodoId,
  historyRows: HistoryRow[]
): TodoSnapshot[] {
  // Group by timestamp to handle multiple fields changed at the same time
  const timestampGroups = new Map<number, HistoryRow[]>();

  for (const row of historyRows) {
    const millis = timestampToMillis(row.timestamp);
    if (!timestampGroups.has(millis)) {
      timestampGroups.set(millis, []);
    }
    timestampGroups.get(millis)!.push(row);
  }

  // Sort timestamps ascending (oldest first)
  const sortedTimestamps = Array.from(timestampGroups.keys()).sort(
    (a, b) => a - b
  );

  // Build snapshots progressively, carrying forward values from previous snapshots
  const snapshots: TodoSnapshot[] = [];
  const currentValue: Record<string, unknown> = {
    title: null,
    description: null,
    isCompleted: 0,
    completeAt: null,
  };

  for (const timestamp of sortedTimestamps) {
    const rows = timestampGroups.get(timestamp)!;

    // Update the current value with changes at this timestamp
    for (const row of rows) {
      currentValue[row.column] = row.value;
    }

    // Create a snapshot with the current state
    snapshots.push({
      id: todoId,
      title: (currentValue.title as string | null) ?? null,
      description: (currentValue.description as string | null) ?? null,
      isCompleted: (currentValue.isCompleted as number | null) ?? 0,
      completeAt: (currentValue.completeAt as string | null) ?? null,
      timestamp,
    });
  }

  // Ensure we have at least one snapshot (the current state)
  if (snapshots.length === 0) {
    // If no history, create a default snapshot with null values
    snapshots.push({
      id: todoId,
      title: null,
      description: null,
      isCompleted: 0,
      completeAt: null,
      timestamp: Date.now(),
    });
  }

  return snapshots;
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
        { column: "completeAt", oldValue: null, newValue: current.completeAt }
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

      // Merge into snapshots
      const snapshots = mergeHistoryToSnapshots(todoId, historyRows);

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
