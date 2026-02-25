/**
 * useTodos - Custom hook combining todo service with state management
 *
 * Provides a clean interface for todo operations with built-in state
 * management for form handling and UI state.
 */

import { useState, useMemo, useCallback } from "react";
import { QueryRows } from "@evolu/common";
import { useTodoService } from "../services";
import { Todo, TodoId, TodoCreateInput } from "../types/todo";
import { TActiveTodosRow } from "../evolu-db/evolu-query";

/**
 * Transforms raw database rows into Todo objects
 */
function transformTodoRows(todoRows: QueryRows): Todo[] {
    return todoRows.map((row: TActiveTodosRow) => ({
        id: row.id as TodoId,
        title: row.title as string,
        description: row.description as string,
        done: row.isCompleted ? true : false,
    }));
}

/**
 * Hook return type
 */
interface UseTodosReturn {
    // Derived state
    activeTodos: Todo[];
    finishedTodos: Todo[];

    // CRUD operations
    createTodo: (input: TodoCreateInput) => { ok: boolean; error?: Error };
    updateTodo: (id: TodoId, title: string, description: string) => { ok: boolean; error?: Error };
    toggleComplete: (id: TodoId, currentState: boolean) => void;
    deleteTodo: (id: TodoId) => void;
}

/**
 * Custom hook for managing todos with derived state
 */
export function useTodos(todoRows: QueryRows): UseTodosReturn {
    const todoService = useTodoService();

    // Transform and separate todos
    const { activeTodos, finishedTodos } = useMemo(() => {
        const allTodos = transformTodoRows(todoRows);
        const active: Todo[] = [];
        const finished: Todo[] = [];

        allTodos.forEach((todo) => {
            if (todo.done) {
                finished.push(todo);
            } else {
                active.push(todo);
            }
        });

        return { activeTodos: active, finishedTodos: finished };
    }, [todoRows]);

    // CRUD operations with wrapped callbacks
    const createTodo = useCallback(
        (input: TodoCreateInput) => todoService.createTodo(input),
        [todoService]
    );

    const updateTodo = useCallback(
        (id: TodoId, title: string, description: string) =>
            todoService.updateTodo(id, {
                title: title.trim(),
                description: description.trim() || undefined,
            }),
        [todoService]
    );

    const toggleComplete = useCallback(
        (id: TodoId, currentState: boolean) => {
            todoService.toggleComplete(id, !currentState);
        },
        [todoService]
    );

    const deleteTodo = useCallback(
        (id: TodoId) => {
            todoService.deleteTodo(id);
        },
        [todoService]
    );

    return {
        activeTodos,
        finishedTodos,
        createTodo,
        updateTodo,
        toggleComplete,
        deleteTodo,
    };
}

/**
 * Hook for managing todo form state
 */
interface UseTodoFormReturn {
    // State
    editing: Todo | null;
    title: string;
    description: string;
    isOpen: boolean;

    // Actions
    openAdd: () => void;
    openEdit: (todo: Todo) => void;
    close: () => void;
    setTitle: (title: string) => void;
    setDescription: (description: string) => void;
    reset: () => void;
}

/**
 * Custom hook for todo form state management
 */
export function useTodoForm(): UseTodoFormReturn {
    const [isOpen, setIsOpen] = useState(false);
    const [editing, setEditing] = useState<Todo | null>(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const reset = useCallback(() => {
        setTitle("");
        setDescription("");
        setEditing(null);
    }, []);

    const openAdd = useCallback(() => {
        reset();
        setIsOpen(true);
    }, [reset]);

    const openEdit = useCallback((todo: Todo) => {
        setEditing(todo);
        setTitle(todo.title);
        setDescription(todo.description);
        setIsOpen(true);
    }, []);

    const close = useCallback(() => {
        setIsOpen(false);
        reset();
    }, [reset]);

    return {
        editing,
        title,
        description,
        isOpen,
        openAdd,
        openEdit,
        close,
        setTitle,
        setDescription,
        reset,
    };
}
