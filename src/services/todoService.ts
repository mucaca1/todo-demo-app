/**
 * Todo Service - Abstraction layer for Evolu database todo operations
 */

import { DateIso, Result } from "@evolu/common";
import { useEvolu } from "../evolu-init";
import { TodoId, TodoCreateInput, TodoUpdateInput } from "../types/todo";

/**
 * Return type for todo service operations
 */
type ServiceResult<T = void> = Result<T, Error>;

/**
 * Custom hook providing todo CRUD operations
 */
export function useTodoService() {
    const { insert, update } = useEvolu();

    /**
     * Create a new todo item
     */
    const createTodo = (input: TodoCreateInput): ServiceResult => {
        const titleValue = input.title.trim();
        if (!titleValue) {
            return { ok: false, error: new Error("Title is required") };
        }

        const result = insert("todo", {
            title: titleValue,
            description: input.description?.trim() || null,
            isCompleted: 0,
        });

        if (!result.ok) {
            console.error("Failed to create todo:", result.error.value);
        }

        return result;
    };

    /**
     * Update an existing todo item
     */
    const updateTodo = (id: TodoId, input: TodoUpdateInput): ServiceResult => {
        const result = update("todo", {
            id,
            ...input,
        });

        if (!result.ok) {
            console.error("Failed to update todo:", result.error.value);
        }

        return result;
    };

    /**
     * Toggle todo completion status
     */
    const toggleComplete = (id: TodoId, isCompleted: boolean): ServiceResult => {
        if (isCompleted) {
            // Mark as complete with timestamp
            const dateResult = DateIso.from(new Date().toISOString());
            if (!dateResult.ok) {
                return { ok: false, error: new Error("Invalid date format") };
            }
            return updateTodo(id, {
                isCompleted: 1,
                completeAt: dateResult.value,
            });
        } else {
            // Mark as incomplete, clear timestamp
            return updateTodo(id, {
                isCompleted: 0,
                completeAt: null,
            });
        }
    };

    /**
     * Soft delete a todo item
     */
    const deleteTodo = (id: TodoId): ServiceResult => {
        return updateTodo(id, { isDeleted: 1 });
    };

    return {
        createTodo,
        updateTodo,
        toggleComplete,
        deleteTodo,
    };
}
