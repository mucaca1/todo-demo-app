/**
 * Evolu history queries for time travel functionality
 *
 * This module provides queries for accessing Evolu's internal message table
 * which stores all historical changes to rows. Each column change is stored
 * as a separate row with timestamps, allowing us to reconstruct the complete
 * history of any todo.
 *
 * Based on: https://www.evolu.dev/docs/time-travel
 */

import * as Evolu from "@evolu/common";
import { evolu } from "../evolu-init";
import { TodoId } from "./evolu-db";
import { Schema } from "./evolu-db";

/**
 * Error thrown when the evolu_message table doesn't exist
 * This happens when the database was created without owner support
 */
export class MessageTableNotFoundError extends Error {
  constructor() {
    super(
      "The evolu_message table doesn't exist. " +
      "This can happen if the database was created before owner support was added. " +
      "Please reset the database from Settings > Danger Zone > Delete Account."
    );
    this.name = "MessageTableNotFoundError";
  }
}

/**
 * Query history for a specific todo column
 *
 * Returns all historical values for a single column, ordered by timestamp
 * ascending (oldest first). Each row represents the value of that column at
 * a specific point in time.
 *
 * @param todoId - The todo ID to get history for
 * @param column - The column name to query (e.g., "title", "description", "isCompleted")
 * @returns An Evolu Query that can be loaded or subscribed to
 * @throws {MessageTableNotFoundError} If the evolu_message table doesn't exist
 *
 * @example
 * ```ts
 * const titleHistoryQuery = todoColumnHistory(todoId, "title");
 * const historyRows = await evolu.loadQuery(titleHistoryQuery);
 * // Each row has: { value: string, timestamp: Uint8Array }
 * ```
 */
export const todoColumnHistory = (
  todoId: TodoId,
  column: keyof typeof Schema.todo
): Evolu.Query =>
  evolu.createQuery((db) =>
    db
      .selectFrom("evolu_history")
      .select(["value", "timestamp"])
      .where("table", "==", "todo")
      .where("id", "==", Evolu.idToIdBytes(todoId))
      .where("column", "==", column)
      .$narrowType<{ value: (typeof Schema.todo)[typeof column]["Type"] }>()
      .orderBy("timestamp", "desc")
  );

export type TTodoColumnHistoryRow = ReturnType<typeof todoColumnHistory> extends Evolu.Query
  ? ReturnType<typeof todoColumnHistory>["Row"]
  : never;

/**
 * Query all columns history for a todo
 *
 * Returns all historical changes across all columns for a specific todo.
 * Each row represents a single column change at a specific timestamp.
 *
 * This is useful for getting a complete picture of all changes made to a todo,
 * which can then be merged and grouped by timestamp to create snapshots.
 *
 * @param todoId - The todo ID to get all history for
 * @returns An Evolu Query that can be loaded or subscribed to
 * @throws {MessageTableNotFoundError} If the evolu_message table doesn't exist
 *
 * @example
 * ```ts
 * const allHistoryQuery = todoAllColumnsHistory(todoId);
 * const historyRows = await evolu.loadQuery(allHistoryQuery);
 * // Each row has: { column: string, value: unknown, timestamp: Uint8Array }
 * ```
 */
export const todoAllColumnsHistory = (todoId: TodoId): Evolu.Query =>
  evolu.createQuery((db) =>
    db
      .selectFrom("evolu_history")
      .select(["column", "value", "timestamp"])
      .where("table", "==", "todo")
      .where("id", "==", Evolu.idToIdBytes(todoId))
      .orderBy("timestamp", "desc")
  );

export type TTodoAllColumnsHistoryRow = ReturnType<typeof todoAllColumnsHistory> extends Evolu.Query
  ? ReturnType<typeof todoAllColumnsHistory>["Row"]
  : never;

/**
 * Helper function to convert a binary timestamp to a JavaScript Date
 *
 * Evolu stores timestamps as binary Uint8Array. This function converts
 * them to Timestamp objects, from which we can get the millis value.
 *
 * @param timestampBytes - The binary timestamp from evolu_message
 * @returns A Timestamp object with millis, counter, and nodeId
 */
export const timestampToDate = (timestampBytes: Uint8Array): Date => {
  const timestamp = Evolu.timestampBytesToTimestamp(
    timestampBytes as Evolu.TimestampBytes
  );
  return new Date(timestamp.millis);
};

/**
 * Helper function to get milliseconds from a binary timestamp
 *
 * @param timestampBytes - The binary timestamp from evolu_message
 * @returns Unix timestamp in milliseconds
 */
export const timestampToMillis = (timestampBytes: Uint8Array): number => {
  const timestamp = Evolu.timestampBytesToTimestamp(
    timestampBytes as Evolu.TimestampBytes
  );
  return timestamp.millis;
};
