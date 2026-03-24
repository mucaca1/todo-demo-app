import React from "react";
import {
    Checkbox,
    Collapse,
    IconButton,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    Box,
    Stack,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import HistoryIcon from "@mui/icons-material/History";
import { Todo } from "../../types/todo";
import { Tag } from "../../types/tag";
import { TagChip } from "../tag";

export interface TodoItemProps {
    todo: Todo;
    allTags: Tag[];
    onToggle: (id: Todo["id"], currentValue: boolean) => void;
    onEdit: (todo: Todo) => void;
    onDelete: (id: Todo["id"]) => void;
    onShowHistory?: (id: Todo["id"]) => void;
}

export function TodoItem({ todo, allTags, onToggle, onEdit, onDelete, onShowHistory }: TodoItemProps) {
    // Get tag objects for this todo
    const todoTags = todo.tags
        ? allTags.filter((tag) => todo.tags!.includes(tag.id))
        : [];

    return (
        <Collapse in timeout={300}>
            <ListItem divider>
                <Checkbox
                    checked={todo.done}
                    onChange={() => onToggle(todo.id, todo.done)}
                />
                <ListItemText
                    primary={todo.title}
                    secondaryTypographyProps={{ component: 'div' }}
                    secondary={
                        <Box>
                            <Box>{todo.description}</Box>
                            {todoTags.length > 0 && (
                                <Stack
                                    direction="row"
                                    spacing={0.5}
                                    mt={0.5}
                                    flexWrap="wrap"
                                    useFlexGap
                                >
                                    {todoTags.map((tag) => (
                                        <TagChip
                                            key={tag.id}
                                            id={tag.id}
                                            name={tag.name}
                                            color={tag.color}
                                            size="small"
                                        />
                                    ))}
                                </Stack>
                            )}
                        </Box>
                    }
                />
                <ListItemSecondaryAction>
                    {onShowHistory && (
                        <IconButton onClick={() => onShowHistory(todo.id)}>
                            <HistoryIcon />
                        </IconButton>
                    )}
                    <IconButton onClick={() => onEdit(todo)}>
                        <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => onDelete(todo.id)}>
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        </Collapse>
    );
}
