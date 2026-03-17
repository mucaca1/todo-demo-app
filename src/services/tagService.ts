/**
 * Tag Service - Abstraction layer for Evolu database tag operations
 */

import { Result } from "@evolu/common";
import { useEvolu } from "../evolu-init";
import { TagId, TodoId } from "../evolu/evolu-db";

/**
 * Return type for tag service operations
 */
type ServiceResult<T = void> = Result<T, Error>;

/**
 * Input type for creating a tag
 */
export interface TagCreateInput {
    name: string;
    color: string;
}

/**
 * Input type for updating a tag
 */
export interface TagUpdateInput {
    name?: string;
    color?: string;
}

/**
 * Custom hook providing tag CRUD operations
 */
export function useTagService() {
    const { insert, update } = useEvolu();

    /**
     * Create a new tag
     */
    const createTag = (input: TagCreateInput): ServiceResult => {
        const nameValue = input.name.trim();
        if (!nameValue) {
            return { ok: false, error: new Error("Tag name is required") };
        }

        const colorValue = input.color.trim();
        if (!colorValue) {
            return { ok: false, error: new Error("Tag color is required") };
        }

        const result = insert("tag", {
            name: nameValue,
            color: colorValue,
        });

        if (!result.ok) {
            console.error("Failed to create tag:", result.error.value);
        }

        return result;
    };

    /**
     * Update an existing tag
     */
    const updateTag = (id: TagId, input: TagUpdateInput): ServiceResult => {
        const updateData: { id: TagId; name?: string; color?: string } = { id };

        if (input.name !== undefined) {
            const nameValue = input.name.trim();
            if (!nameValue) {
                return { ok: false, error: new Error("Tag name cannot be empty") };
            }
            updateData.name = nameValue;
        }

        if (input.color !== undefined) {
            const colorValue = input.color.trim();
            if (!colorValue) {
                return { ok: false, error: new Error("Tag color cannot be empty") };
            }
            updateData.color = colorValue;
        }

        const result = update("tag", updateData);

        if (!result.ok) {
            console.error("Failed to update tag:", result.error.value);
        }

        return result;
    };

    /**
     * Soft delete a tag
     */
    const deleteTag = (id: TagId): ServiceResult => {
        const result = update("tag", { id, isDeleted: 1 });

        if (!result.ok) {
            console.error("Failed to delete tag:", result.error.value);
        }

        return result;
    };

    /**
     * Add a tag to a todo
     */
    const addTagToTodo = (todoId: TodoId, tagId: TagId): ServiceResult => {
        const result = insert("todoTag", {
            todoId,
            tagId,
        });

        if (!result.ok) {
            console.error("Failed to add tag to todo:", result.error.value);
        }

        return result;
    };

    /**
     * Remove a tag from a todo (soft delete)
     */
    const removeTagFromTodo = (todoId: TodoId, tagId: TagId): ServiceResult => {
        // First, find the todoTag entry to get its id
        // Note: We need to query for the todoTag id, but since Evolu doesn't support
        // direct query in updates, we'll use a different approach
        // For now, we'll use a workaround by updating based on composite key
        const result = update("todoTag", {
            todoId,
            tagId,
            isDeleted: 1,
        });

        if (!result.ok) {
            console.error("Failed to remove tag from todo:", result.error.value);
        }

        return result;
    };

    return {
        createTag,
        updateTag,
        deleteTag,
        addTagToTodo,
        removeTagFromTodo,
    };
}
