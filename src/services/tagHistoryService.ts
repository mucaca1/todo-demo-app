/**
 * Tag History Service - Business logic for tag history feature
 *
 * This service handles loading, processing, and navigating through the
 * complete history of a tag object. It fetches data from Evolu's internal
 * evolu_history table and processes it into snapshots.
 *
 * This service uses the universal history system to maintain consistency
 * with the todo history feature.
 */

import { useState, useCallback } from "react";
import { useEvolu } from "../evolu-init";
import { queryAllColumnsHistory, timestampToMillis } from "../evolu/evolu-history";
import { TagId } from "../types/tag";
import { mergeHistoryToSnapshots } from "./universalHistoryService";
import type { HistoryState, ObjectSnapshot } from "../types/universalHistory";

/**
 * Columns to track history for tags
 */
const TRACKED_COLUMNS = ["name", "color"] as const;

/**
 * Tag snapshot data structure
 */
export interface TagSnapshotData {
  name: string | null;
  color: string | null;
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
 * Tag History Service Hook
 *
 * Provides functions to load history and navigate through snapshots.
 * Uses React state management for the current history state.
 *
 * @example
 * ```tsx
 * const {
 *   historyState,
 *   loadTagHistory,
 *   goBack,
 *   goForward,
 *   jumpToSnapshot,
 *   resetHistory
 * } = useTagHistory();
 *
 * // Load history when opening dialog
 * await loadTagHistory(tagId);
 *
 * // Navigate
 * goBack();
 * goForward();
 * jumpToSnapshot(2);
 * ```
 */
export function useTagHistory() {
  const { loadQuery } = useEvolu();
  const [historyState, setHistoryState] = useState<HistoryState<TagSnapshotData> | null>(null);

  /**
   * Load complete history for a tag and compute all snapshots
   *
   * @param tagId - The tag ID to load history for
   * @returns Promise resolving when history is loaded
   */
  const loadTagHistory = useCallback(async (tagId: TagId): Promise<void> => {
    try {
      // Query all columns history for this tag using the universal query function
      const query = queryAllColumnsHistory("tag", tagId);
      const result = await loadQuery(query);

      // Type assertion for the query result
      const historyRows = result as unknown as HistoryRow[];

      // Merge into snapshots using the universal merge function
      const snapshots = mergeHistoryToSnapshots<TagSnapshotData>(
        historyRows,
        tagId,
        "tag",
        TRACKED_COLUMNS
      );

      // Ensure we have at least one snapshot (the current state)
      const finalSnapshots = snapshots.length > 0 ? snapshots : [{
        id: tagId,
        tableName: "tag",
        data: {
          name: null,
          color: null,
        },
        timestamp: Date.now(),
        version: 1,
      }];

      // Set initial state at the latest snapshot (current state)
      const lastIndex = finalSnapshots.length - 1;

      setHistoryState({
        objectId: tagId,
        tableName: "tag",
        currentSnapshot: finalSnapshots[lastIndex] ?? null,
        currentIndex: lastIndex,
        snapshots: finalSnapshots,
        canGoBack: lastIndex > 0,
        canGoForward: false, // Always start at the latest
      });
    } catch (error) {
      console.error("Failed to load tag history:", error);

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
        objectId: tagId,
        tableName: "tag",
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
   * Check if the current snapshot is the latest (current state)
   */
  const isCurrentState = useCallback((): boolean => {
    if (!historyState) return false;
    return historyState.currentIndex === historyState.snapshots.length - 1;
  }, [historyState]);

  return {
    /** Current history state */
    historyState,
    /** Load history for a tag */
    loadTagHistory,
    /** Navigate to previous snapshot */
    goBack,
    /** Navigate to next snapshot */
    goForward,
    /** Jump to a specific snapshot index */
    jumpToSnapshot,
    /** Clear history state */
    resetHistory,
    /** Check if at current state */
    isCurrentState,
  };
}

/**
 * Type exports for use in components
 */
export type { HistoryState, ObjectSnapshot };

/**
 * Tag History Configuration
 *
 * Configuration object for using the universal history system with Tag objects.
 * This can be used with UniversalHistoryDialog and UniversalHistoryTable.
 */
export const tagHistoryConfig = {
  tableName: "tag" as const,
  columns: [...TRACKED_COLUMNS],
  fieldLabels: {
    name: "Name",
    color: "Color",
  },
  valueFormatters: {
    color: (value: unknown) => {
      if (!value || typeof value !== 'string') return "None";
      return value;
    },
  },
} as const;

/**
 * Convert TagSnapshotData to ObjectSnapshot for use with universal components
 *
 * @param tagSnapshot - Universal ObjectSnapshot with TagSnapshotData
 * @returns The same ObjectSnapshot (already in universal format)
 */
export function tagSnapshotToObjectSnapshot(
  tagSnapshot: ObjectSnapshot<TagSnapshotData>
): ObjectSnapshot<TagSnapshotData> {
  return tagSnapshot;
}
