import React, { useState } from "react";
import {
    Button,
    List,
    Stack,
    SvgIconComponent,
    Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { Todo } from "../../types/todo";
import { TodoItem } from "./TodoItem";

export interface TodoListProps {
    title: string;
    titleIcon: SvgIconComponent;
    titleIconColor?: "primary" | "success" | "secondary" | "error" | "info" | "warning";
    todos: Todo[];
    onToggle: (id: Todo["id"], currentValue: boolean) => void;
    onEdit: (todo: Todo) => void;
    onDelete: (id: Todo["id"]) => void;
    emptyMessage?: string;
    /** If set, show "Show all/Show less" button when todos exceed this count */
    initialVisibleCount?: number;
}

export function TodoList({
    title,
    titleIcon: TitleIcon,
    titleIconColor = "primary",
    todos,
    onToggle,
    onEdit,
    onDelete,
    emptyMessage,
    initialVisibleCount,
}: TodoListProps) {
    const { t } = useTranslation();
    const [showAll, setShowAll] = useState(false);

    const shouldTruncate = initialVisibleCount !== undefined && todos.length > initialVisibleCount;
    const visibleTodos = shouldTruncate && !showAll
        ? todos.slice(0, initialVisibleCount)
        : todos;

    return (
        <>
            <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
                <Stack direction="row" alignItems="center" spacing={1}>
                    <TitleIcon color={titleIconColor} />
                    <Typography variant="h6">{title}</Typography>
                </Stack>
                {shouldTruncate && (
                    <Button
                        size="small"
                        onClick={() => setShowAll((v) => !v)}
                    >
                        {showAll ? t("todo.showLast3") : t("todo.showAllTodos")}
                    </Button>
                )}
            </Stack>

            <List>
                {visibleTodos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onToggle={onToggle}
                        onEdit={onEdit}
                        onDelete={onDelete}
                    />
                ))}
                {todos.length === 0 && emptyMessage && (
                    <Typography
                        color="text.secondary"
                        px={2}
                        py={3}
                        textAlign="center"
                        sx={{
                            fontStyle: 'italic',
                            opacity: 0.7
                        }}
                    >
                        {emptyMessage}
                    </Typography>
                )}
            </List>
        </>
    );
}
