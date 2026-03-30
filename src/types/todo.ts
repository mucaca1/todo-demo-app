/**
 * Todo-related types
 */

import { TodoId, TagId } from '../evolu/evolu-db';

/**
 * Todo item representation for UI display
 */
export interface Todo {
    id: TodoId;
    title: string;
    description: string | null;  // Match database schema which allows null
    done: boolean;
    finishedAt?: Date;
    tags?: TagId[];
}

/**
 * Data for creating a new todo
 */
export interface TodoCreateInput {
    title: string;
    description?: string;
}

/**
 * Data for updating an existing todo
 */
export interface TodoUpdateInput {
    title?: string;
    description?: string | null;
    isCompleted?: number;
    completeAt?: string | null;
    isDeleted?: number;
}

/**
 * Re-export TodoId from evolu-db for convenience
 */
export type { TodoId };
