import React, { useEffect, useState } from "react";
import {
    Box,
    Button,
    Checkbox,
    Collapse,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useQuery } from "@evolu/react";
import { DateIso, QueryRows } from "@evolu/common";
import { TodoId } from "./../evolu-db/evolu-db"
import { activeTodos, TActiveTodosRow } from "../evolu-db/evolu-query";
import { useEvolu } from "../evolu-init";

export type IPageArgs = {
    todoRows: QueryRows
}

export type Todo = {
    id: TodoId;
    title: string;
    description: string;
    done: boolean;
    finishedAt?: Date;
};

export default function TodoPage({todoRows} : IPageArgs) {
    const { insert, update } = useEvolu();
    const [showAllFinished, setShowAllFinished] = useState(false);
    const [openForm, setOpenForm] = useState(false);
    const [editing, setEditing] = useState<Todo | null>(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [todos, setTodos] = useState<Todo[]>([]);
    //const result: QueryRows<TActiveTodosRow> = useQuery(activeTodos);
    const finished: Array<Todo> = [];
    const todoToWork: Array<Todo> = [];
    todoRows.forEach((row: TActiveTodosRow) => {
        if (row.isCompleted) {
            finished.push({
                id: row.id as TodoId,
                title: row.title as string,
                description: row.description as string,
                done: row.isCompleted ? true : false
            });
        } else {
            todoToWork.push({
                id: row.id as TodoId,
                title: row.title as string,
                description: row.description as string,
                done: row.isCompleted ? true : false
            });
        }
    });

    const resetForm = () => {
        setTitle("");
        setDescription("");
        setEditing(null);
    };

    const openAdd = () => {
        resetForm();
        setOpenForm(true);
    };

    const openEdit = (todo: Todo) => {
        setEditing(todo);
        setTitle(todo.title);
        setDescription(todo.description);
        setOpenForm(true);
    };

    const saveTodo = () => {
        if (!title.trim()) return;


        if (editing) {
            const result = update("todo", {
                id: editing.id,
                isCompleted: 1,
            });
            if (!result.ok) {
                console.log(result.error.value);
            }
            console.log("Record updated.")
        } else {
            const result = insert("todo", {
                title: title,
                description: description,
                isCompleted: 0
            })
            if (!result.ok) {
                console.log(result.error.value);
            }
            console.log("Record created.")
        }

        setOpenForm(false);
        resetForm();
    };

    const toggleDone = (id: TodoId, lastValue: boolean) => {
        if (!lastValue) {
            const dateResult = DateIso.from(new Date().toISOString());
            if (dateResult.ok) {
                update("todo", { id: id, isCompleted: lastValue ? 0 : 1 , completeAt: dateResult.value})
            }
        } else {
            update("todo", { id: id, isCompleted: lastValue ? 0 : 1, completeAt: null })
        }
    };

    const removeTodo = (id: TodoId) => {
        update("todo", {id: id, isDeleted: 1})
    };

    return (
        <Box p={3} maxWidth={800} mx="auto">
            <Stack direction="row" justifyContent="space-between" mb={2}>
                <Typography variant="h5">Todo</Typography>
                <Button variant="contained" onClick={openAdd}>
                    Add Todo
                </Button>
            </Stack>

            <Typography variant="h6" gutterBottom>
                Active
            </Typography>
            <List>
                {todoToWork.map((todo) => (
                    <Collapse key={todo.id} in timeout={300}>
                        <ListItem key={todo.id} divider>
                            <Checkbox
                                checked={todo.done}
                                onChange={() => toggleDone(todo.id, todo.done)}
                            />
                            <ListItemText
                                primary={todo.title}
                                secondary={todo.description}
                            />
                            <ListItemSecondaryAction>
                                <IconButton onClick={() => openEdit(todo)}>
                                    <EditIcon />
                                </IconButton>
                                <IconButton onClick={() => removeTodo(todo.id)}>
                                    <DeleteIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    </Collapse>
                ))}
                {todoToWork.length === 0 && (
                    <Typography color="text.secondary" px={2}>
                        No active todos
                    </Typography>
                )}
            </List>

            <Stack direction="row" justifyContent="space-between" mb={2}>
                <Typography variant="h6">Finished</Typography>
                {finished.length > 3 && (
                    <Button
                        size="small"
                        onClick={() => setShowAllFinished((v) => !v)}
                    >
                        {showAllFinished ? "Show last 3" : "Show all todos"}
                    </Button>
                )}
            </Stack>

            <List>
                {finished.slice(0, showAllFinished ? finished.length : 3).map((todo) => (
                    <Collapse key={todo.id} in timeout={300}>
                        <ListItem divider>
                            <Checkbox
                                checked={todo.done}
                                onChange={() => toggleDone(todo.id, todo.done)}
                            />
                            <ListItemText
                                primary={todo.title}
                                secondary={todo.description}
                            />
                            <ListItemSecondaryAction>
                                <IconButton onClick={() => openEdit(todo)}>
                                    <EditIcon />
                                </IconButton>
                                <IconButton onClick={() => removeTodo(todo.id)}>
                                    <DeleteIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    </Collapse>
                ))}
            </List>

            <Dialog open={openForm} onClose={() => setOpenForm(false)} fullWidth>
                <DialogTitle>{editing ? "Edit Todo" : "New Todo"}</DialogTitle>
                <DialogContent>
                    <Stack spacing={2} mt={1}>
                        <TextField
                            label="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                            autoFocus
                        />
                        <TextField
                            label="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            multiline
                            minRows={3}
                        />
                    </Stack>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenForm(false)}>Cancel</Button>
                    <Button variant="contained" onClick={saveTodo}>
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}
