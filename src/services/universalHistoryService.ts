/**
 * Universal History Service
 *
 * Generic service for creating and managing object history snapshots.
 * Works with any Evolu table/object type through configuration.
 */

import type {
  ObjectSnapshot,
  FieldChange,
  HistoryState,
  HistoryConfig,
} from "../types/universalHistory";
import { timestampToMillis } from "../evolu/evolu-history";

/**
 * Merges raw Evolu history rows into snapshots.
 *
 * Takes the raw column-by-column history from Evolu and merges it into
 * complete object snapshots at each unique timestamp.
 *
 * @param historyRows - Raw history rows from Evolu evolu_history table
 * @param objectId - Object ID
 * @param tableName - Table name
 * @param trackedColumns - Columns to include in snapshots
 * @returns Array of snapshots in chronological order (oldest first)
 */
export function mergeHistoryToSnapshots<T>(
  historyRows: Array<{
    column: string;
    value: unknown;
    timestamp: Uint8Array;
  }>,
  objectId: string,
  tableName: string,
  trackedColumns: readonly string[]
): ObjectSnapshot<T>[] {
  // Group changes by timestamp
  const timestampGroups = new Map<number, Map<string, unknown>>();

  for (const row of historyRows) {
    const millis = timestampToMillis(row.timestamp);

    if (!timestampGroups.has(millis)) {
      timestampGroups.set(millis, new Map());
    }

    const group = timestampGroups.get(millis)!;
    group.set(row.column, row.value);
  }

  // Build snapshots by applying changes in chronological order
  const snapshots: ObjectSnapshot<T>[] = [];
  const sortedTimestamps = Array.from(timestampGroups.keys()).sort((a, b) => a - b);

  // Track current state of all fields
  const currentState = new Map<string, unknown>();

  for (let i = 0; i < sortedTimestamps.length; i++) {
    const timestamp = sortedTimestamps[i];
    const changes = timestampGroups.get(timestamp)!;

    // Apply changes to current state
    for (const [column, value] of changes.entries()) {
      currentState.set(column, value);
    }

    // Build snapshot data with only tracked columns
    const snapshotData: Record<string, unknown> = {};
    for (const column of trackedColumns) {
      snapshotData[column] = currentState.get(column);
    }

    snapshots.push({
      id: objectId,
      tableName,
      data: snapshotData as T,
      timestamp,
      version: i + 1,
    });
  }

  // Return snapshots in chronological order (oldest first)
  return snapshots;
}

/**
 * Compares two snapshots and returns field changes.
 *
 * @param prev - Previous snapshot (null for first snapshot)
 * @param current - Current snapshot
 * @param config - History configuration
 * @returns Array of field changes
 */
export function compareSnapshots<T>(
  prev: ObjectSnapshot<T> | null,
  current: ObjectSnapshot<T> | null | undefined,
  config: HistoryConfig<T>
): FieldChange[] {
  // Guard clause: if current is undefined/null, return empty array
  if (!current) {
    return [];
  }

  const changes: FieldChange[] = [];

  // Get all columns from current or previous snapshot
  const allColumns = new Set([
    ...Object.keys(current.data),
    ...(prev ? Object.keys(prev.data) : []),
  ]);

  for (const column of allColumns) {
    const oldValue = prev?.data[column];
    const newValue = current.data[column];

    // Check if field was deleted (exists in prev but not in current)
    const deleted = prev && !(column in current.data);

    // Use custom comparator if available, otherwise strict equality
    const comparator = config.fieldComparators?.[column as string];
    const changed = comparator
      ? !comparator(oldValue, newValue)
      : oldValue !== newValue;

    changes.push({
      column,
      oldValue,
      newValue,
      changed,
      deleted,
    });
  }

  return changes;
}

/**
 * Creates a HistoryState object from snapshots.
 *
 * @param objectId - Object ID
 * @param tableName - Table name
 * @param snapshots - Array of snapshots
 * @param initialIndex - Initial snapshot index (default: last one)
 * @returns History state
 */
export function createHistoryState<T>(
  objectId: string,
  tableName: string,
  snapshots: ObjectSnapshot<T>[],
  initialIndex: number = -1
): HistoryState<T> {
  const currentIndex = initialIndex === -1 ? snapshots.length - 1 : initialIndex;

  return {
    objectId,
    tableName,
    snapshots,
    currentIndex,
    currentSnapshot: snapshots[currentIndex] ?? null,
    canGoBack: currentIndex > 0,
    canGoForward: currentIndex < snapshots.length - 1,
  };
}

/**
 * Hook-like function for managing history navigation state.
 * This is a pure function version that can be used with React hooks.
 *
 * @param config - History configuration
 * @param snapshots - Pre-computed snapshots
 * @param initialIndex - Initial snapshot index
 * @returns History state and navigation functions
 */
export function useHistoryNavigation<T>(
  config: HistoryConfig<T>,
  snapshots: ObjectSnapshot<T>[],
  initialIndex: number = -1
): {
  state: HistoryState<T>;
  goBack: () => HistoryState<T>;
  goForward: () => HistoryState<T>;
  jumpToSnapshot: (index: number) => HistoryState<T>;
  getFieldChanges: (snapshotIndex: number) => FieldChange[];
} {
  const initialState = createHistoryState(
    snapshots[0]?.id ?? "",
    config.tableName,
    snapshots,
    initialIndex
  );

  const goBack = (): HistoryState<T> => {
    if (!initialState.canGoBack) return initialState;
    const newIndex = initialState.currentIndex - 1;
    return createHistoryState(
      initialState.objectId,
      initialState.tableName,
      initialState.snapshots,
      newIndex
    );
  };

  const goForward = (): HistoryState<T> => {
    if (!initialState.canGoForward) return initialState;
    const newIndex = initialState.currentIndex + 1;
    return createHistoryState(
      initialState.objectId,
      initialState.tableName,
      initialState.snapshots,
      newIndex
    );
  };

  const jumpToSnapshot = (index: number): HistoryState<T> => {
    if (index < 0 || index >= snapshots.length) return initialState;
    return createHistoryState(
      initialState.objectId,
      initialState.tableName,
      snapshots,
      index
    );
  };

  const getFieldChanges = (snapshotIndex: number): FieldChange[] => {
    const snapshot = snapshots[snapshotIndex];
    if (!snapshot) return [];
    const prev = snapshots[snapshotIndex - 1] ?? null;
    return compareSnapshots(prev, snapshot, config);
  };

  return {
    state: initialState,
    goBack,
    goForward,
    jumpToSnapshot,
    getFieldChanges,
  };
}

/**
 * Gets the display label for a field.
 *
 * @param column - Column name
 * @param config - History configuration
 * @returns Display label
 */
export function getFieldLabel<T>(
  column: string,
  config: HistoryConfig<T>
): string {
  return config.fieldLabels?.[column] ?? column;
}

/**
 * Formats a field value for display.
 *
 * @param column - Column name
 * @param value - Field value
 * @param config - History configuration
 * @returns Formatted string
 */
export function formatFieldValue<T>(
  column: string,
  value: unknown,
  config: HistoryConfig<T>
): string {
  const formatter = config.valueFormatters?.[column as string];

  if (formatter) {
    return formatter(value);
  }

  // Default formatting
  if (value === null || value === undefined) {
    return "Empty";
  }
  return String(value);
}
