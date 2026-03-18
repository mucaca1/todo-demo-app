import React, { useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import { QueryRows } from "@evolu/common";
import { useQueries } from "@evolu/react";
import { TodoId, Todo } from "../types/todo";
import { Tag, TagId } from "../types/tag";
import { TActiveTodosRow } from "../evolu-db/evolu-query";
import { activeTodos, allTags, allTodoTags } from "../evolu/evolu-query";
import { useTodoService, useTagService } from "../services";
import { useTranslation } from "react-i18next";
import { TodoList, TodoForm } from "../components/todo";

export type IPageArgs = {
    todoRows: QueryRows;
};

export default function TodoPage({ todoRows }: IPageArgs) {
    const { createTodo, updateTodo, toggleComplete, deleteTodo } = useTodoService();
    const { addTagToTodo, removeTagFromTodo } = useTagService();
    const { t } = useTranslation();
    const [openForm, setOpenForm] = useState(false);
    const [editing, setEditing] = useState<Todo | null>(null);

    // Query all tags and all todo-tag relationships (stable number of queries)
    const [allTagsRows, allTodoTagRows] = useQueries([allTags, allTodoTags]);

    // Convert tag rows to Tag objects
    const allTagObjects: Tag[] = allTagsRows.map((row: any) => ({
        id: row.id,
        name: row.name as string,
        color: row.color as string,
    }));

    // Create a map of todoId -> tagIds from the flat results
    const todoTagMap = new Map<TodoId, TagId[]>();
    todoRows.forEach((row: TActiveTodosRow) => {
        const todoId = row.id as TodoId;
        const tags = allTodoTagRows
            .filter((tagRow: any) => tagRow.todoId === todoId)
            .map((tagRow: any) => tagRow.id as TagId);
        todoTagMap.set(todoId, tags);
    });

    // Separate todos into active and finished lists
    const finished: Array<Todo> = [];
    const activeTodos: Array<Todo> = [];
    todoRows.forEach((row: TActiveTodosRow) => {
        const todoId = row.id as TodoId;
        const todo: Todo = {
            id: todoId,
            title: row.title as string,
            description: row.description as string,
            done: row.isCompleted ? true : false,
            tags: todoTagMap.get(todoId) || [],
        };
        if (row.isCompleted) {
            finished.push(todo);
        } else {
            activeTodos.push(todo);
        }
    });

    const openAdd = () => {
        setEditing(null);
        setOpenForm(true);
    };

    const openEdit = (todo: Todo) => {
        setEditing(todo);
        setOpenForm(true);
    };

    const handleSave = (title: string, description: string, tagIds: TagId[]) => {
        if (editing) {
            updateTodo(editing.id, {
                title,
                description: description || undefined,
            });

            // Update tags: remove old ones and add new ones
            // First, remove all existing tags for this todo
            if (editing.tags) {
                editing.tags.forEach((tagId) => {
                    removeTagFromTodo(editing.id, tagId);
                });
            }

            // Add new tags
            tagIds.forEach((tagId) => {
                addTagToTodo(editing.id, tagId);
            });
        } else {
            createTodo({
                title,
                description: description || undefined,
            });

            // Note: For new todos, we need to get the newly created todo ID
            // This is a limitation - tags will need to be added after todo creation
            // For now, we'll skip tag assignment on creation (can be added later via edit)
            // TODO: Implement a way to get the newly created todo ID to add tags immediately
        }
        setOpenForm(false);
        setEditing(null);
    };

    const handleToggle = (id: TodoId, currentValue: boolean) => {
        toggleComplete(id, !currentValue);
    };

    const handleDelete = (id: TodoId) => {
        deleteTodo(id);
    };

    const handleCloseForm = () => {
        setOpenForm(false);
        setEditing(null);
    };

    return (
        <Box p={3} maxWidth={800} mx="auto">
            <Stack direction="row" justifyContent="space-between" mb={2}>
                <Stack direction="row" alignItems="center" spacing={1}>
                    <PlaylistAddCheckIcon color="primary" />
                    <Typography variant="h5">{t("todo.title")}</Typography>
                </Stack>
                <Button variant="contained" startIcon={<AddIcon />} onClick={openAdd}>
                    {t("todo.addTodo")}
                </Button>
            </Stack>

            <TodoList
                title={t("todo.active")}
                titleIcon={CheckBoxOutlineBlankIcon}
                titleIconColor="primary"
                todos={activeTodos}
                allTags={allTagObjects}
                onToggle={handleToggle}
                onEdit={openEdit}
                onDelete={handleDelete}
                emptyMessage={t("todo.noActiveTodos")}
            />

            <TodoList
                title={t("todo.finished")}
                titleIcon={CheckBoxIcon}
                titleIconColor="success"
                todos={finished}
                allTags={allTagObjects}
                onToggle={handleToggle}
                onEdit={openEdit}
                onDelete={handleDelete}
                initialVisibleCount={3}
            />

            <TodoForm
                open={openForm}
                editingTodo={editing}
                allTags={allTagObjects}
                onSave={handleSave}
                onClose={handleCloseForm}
            />
        </Box>
    );
}
