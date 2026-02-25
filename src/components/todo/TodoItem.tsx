import React from "react";
import {
    Checkbox,
    Collapse,
    IconButton,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Todo } from "../../types/todo";

export interface TodoItemProps {
    todo: Todo;
    onToggle: (id: Todo["id"], currentValue: boolean) => void;
    onEdit: (todo: Todo) => void;
    onDelete: (id: Todo["id"]) => void;
}

export function TodoItem({ todo, onToggle, onEdit, onDelete }: TodoItemProps) {
    return (
        <Collapse in timeout={300}>
            <ListItem divider>
                <Checkbox
                    checked={todo.done}
                    onChange={() => onToggle(todo.id, todo.done)}
                />
                <ListItemText
                    primary={todo.title}
                    secondary={todo.description}
                />
                <ListItemSecondaryAction>
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
