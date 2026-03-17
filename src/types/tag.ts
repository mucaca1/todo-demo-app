/**
 * Tag-related types
 */

import { TagId, TodoId } from '../evolu/evolu-db';

/**
 * Tag representation for UI display
 */
export interface Tag {
    id: TagId;
    name: string;
    color: string;
}

/**
 * Data for creating a new tag
 */
export interface TagCreateInput {
    name: string;
    color: string;
}

/**
 * Data for updating an existing tag
 */
export interface TagUpdateInput {
    name?: string;
    color?: string;
    isDeleted?: number;
}

/**
 * Association between a Todo and a Tag (join table row)
 */
export interface TodoTag {
    id: string;
    todoId: TodoId;
    tagId: TagId;
}

/**
 * Data for adding a tag to a todo
 */
export interface AddTagToTodoInput {
    todoId: TodoId;
    tagId: TagId;
}

/**
 * Re-export TagId and TodoId from evolu-db for convenience
 */
export type { TagId, TodoId };
