/**
 * Time travel history types for Evolu-based history tracking
 *
 * These types support the time travel feature that allows users to navigate
 * through the complete history of a todo object, viewing snapshots at any point
 * in time from creation to the current state.
 */

import { TodoId, TagId } from '../evolu/evolu-db';

/**
 * A single historical change for a specific column
 *
 * Represents one row from Evolu's internal evolu_history table.
 * Each time a column value changes, a new ColumnHistory entry is created.
 */
export interface ColumnHistory {
  /** The column name that changed (e.g., "title", "description", "isCompleted") */
  column: string;
  /** The value of the column at this point in time */
  value: unknown;
  /** Unix timestamp (ms) when this value was recorded */
  timestamp: number;
}

/**
 * A complete snapshot of a todo at a specific point in time
 *
 * Snapshots are reconstructed by merging all column histories up to a given timestamp.
 * The latest snapshot represents the current state of the todo.
 */
export interface TodoSnapshot {
  /** The todo's unique identifier */
  id: TodoId;
  /** The todo title at this point in time */
  title: string | null;
  /** The todo description at this point in time */
  description: string | null;
  /** Completion status (0 = incomplete, 1 = complete) at this point in time */
  isCompleted: number | null;
  /** ISO date string when the todo was/will be completed, or null if not applicable */
  completeAt: string | null;
  /** Array of tag IDs associated with this todo at this point in time */
  tags: TagId[];
  /** Unix timestamp (ms) representing when this snapshot was valid */
  timestamp: number;
}

/**
 * Timeline entry representing a single change event
 *
 * Groups multiple field changes that occurred at the same timestamp
 * into a single timeline event. This provides a cleaner view of history
 * compared to showing each column change separately.
 */
export interface TimelineEntry {
  /** Unix timestamp (ms) when this change event occurred */
  timestamp: number;
  /** JavaScript Date object for easy formatting */
  date: Date;
  /** List of field changes that occurred at this timestamp */
  changes: FieldChange[];
}

/**
 * A single field change within a timeline entry
 *
 * Shows what changed for a specific field, including both the old and new values.
 */
export interface FieldChange {
  /** The column/field name that changed */
  column: string;
  /** The value before this change */
  oldValue: unknown;
  /** The value after this change */
  newValue: unknown;
}

/**
 * History state for time travel navigation
 *
 * Maintains the current position in the timeline and computed navigation state.
 * Used by the history service to manage the user's position while navigating
 * through history.
 */
export interface HistoryState {
  /** The todo ID this history is for */
  todoId: TodoId;
  /** The snapshot at the current timeline position */
  currentSnapshot: TodoSnapshot | null;
  /** Current index in the snapshots array (0 = oldest/initial, length-1 = current) */
  currentIndex: number;
  /** All snapshots sorted by timestamp ascending (oldest first, current last) */
  snapshots: TodoSnapshot[];
  /** Whether user can navigate back in time (false when at the oldest state) */
  canGoBack: boolean;
  /** Whether user can navigate forward in time (false when at current state) */
  canGoForward: boolean;
}
