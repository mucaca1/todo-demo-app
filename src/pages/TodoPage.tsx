import React, { useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import { QueryRows } from "@evolu/common";
import { TodoId, Todo } from "../types/todo";
import { TActiveTodosRow } from "../evolu-db/evolu-query";
import { useTodoService } from "../services";
import { useTranslation } from "react-i18next";
import { TodoList, TodoForm } from "../components/todo";

export type IPageArgs = {
    todoRows: QueryRows;
};

export default function TodoPage({ todoRows }: IPageArgs) {
    const { createTodo, updateTodo, toggleComplete, deleteTodo } = useTodoService();
    const { t } = useTranslation();
    const [openForm, setOpenForm] = useState(false);
    const [editing, setEditing] = useState<Todo | null>(null);

    // Separate todos into active and finished lists
    const finished: Array<Todo> = [];
    const activeTodos: Array<Todo> = [];
    todoRows.forEach((row: TActiveTodosRow) => {
        const todo: Todo = {
            id: row.id as TodoId,
            title: row.title as string,
            description: row.description as string,
            done: row.isCompleted ? true : false,
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

    const handleSave = (title: string, description: string) => {
        if (editing) {
            updateTodo(editing.id, {
                title,
                description: description || undefined,
            });
        } else {
            createTodo({
                title,
                description: description || undefined,
            });
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
                onToggle={handleToggle}
                onEdit={openEdit}
                onDelete={handleDelete}
                initialVisibleCount={3}
            />

            <TodoForm
                open={openForm}
                editingTodo={editing}
                onSave={handleSave}
                onClose={handleCloseForm}
            />
        </Box>
    );
}
