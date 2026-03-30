/**
 * Universal History Types
 *
 * Generic type definitions for the universal history viewer system
 * that works with any Evolu object type.
 */

/**
 * Represents a snapshot of an object at a specific point in time.
 * Generic over the object's data structure.
 */
export interface ObjectSnapshot<T = Record<string, unknown>> {
  /** Unique identifier for the object */
  id: string;
  /** Evolu table name */
  tableName: string;
  /** Object state at this timestamp */
  data: T;
  /** Unix timestamp in milliseconds */
  timestamp: number;
  /** Version number (0 = creation, increments with each change) */
  version: number;
}

/**
 * Represents a change to a single field between two snapshots.
 */
export interface FieldChange {
  /** Field/column name */
  column: string;
  /** Previous value (undefined if this is the first snapshot) */
  oldValue: unknown;
  /** New value (undefined if field was deleted) */
  newValue: unknown;
  /** true if values differ between snapshots */
  changed: boolean;
  /** true if field was removed (exists in prev but not in current) */
  deleted: boolean;
}

/**
 * Navigation state for history time-travel.
 * Generic over the object's data structure.
 */
export interface HistoryState<T = Record<string, unknown>> {
  /** Object ID being viewed */
  objectId: string;
  /** Evolu table name */
  tableName: string;
  /** All snapshots in chronological order */
  snapshots: ObjectSnapshot<T>[];
  /** Current snapshot index (-1 if viewing live state) */
  currentIndex: number;
  /** Current snapshot data (null if viewing live state) */
  currentSnapshot: ObjectSnapshot<T> | null;
  /** Can navigate to previous snapshot */
  canGoBack: boolean;
  /** Can navigate to next snapshot */
  canGoForward: boolean;
}

/**
 * Configuration object for type-specific history behavior.
 * Generic over the object's data structure.
 */
export interface HistoryConfig<T = Record<string, unknown>> {
  /** Evolu table name */
  tableName: string;
  /** Columns to track in history */
  columns: readonly (keyof T | string)[];
  /** Human-readable display names for fields (e.g., isCompleted → "Status") */
  fieldLabels?: Partial<Record<keyof T | string, string>>;
  /** Functions to format field values for display */
  valueFormatters?: Partial<Record<keyof T | string, (value: unknown) => string>>;
  /** Custom comparators for detecting field changes */
  fieldComparators?: Partial<Record<keyof T | string, (a: unknown, b: unknown) => boolean>>;
}
