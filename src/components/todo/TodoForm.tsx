import React, { useState, useEffect } from "react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Stack,
    TextField,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { Todo } from "../../types/todo";

export interface TodoFormProps {
    open: boolean;
    editingTodo: Todo | null;
    onSave: (title: string, description: string) => void;
    onClose: () => void;
}

export function TodoForm({ open, editingTodo, onSave, onClose }: TodoFormProps) {
    const { t } = useTranslation();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    // Reset form when opening/closing or when editingTodo changes
    useEffect(() => {
        if (open) {
            if (editingTodo) {
                setTitle(editingTodo.title);
                setDescription(editingTodo.description);
            } else {
                setTitle("");
                setDescription("");
            }
        }
    }, [open, editingTodo]);

    const handleSave = () => {
        if (!title.trim()) return;
        onSave(title.trim(), description.trim());
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth>
            <DialogTitle>
                {editingTodo ? t("todo.editTodo") : t("todo.newTodo")}
            </DialogTitle>
            <DialogContent>
                <Stack spacing={2} mt={1}>
                    <TextField
                        label={t("todo.form.title")}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        autoFocus
                    />
                    <TextField
                        label={t("todo.form.description")}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        multiline
                        minRows={3}
                    />
                </Stack>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>{t("common.cancel")}</Button>
                <Button variant="contained" onClick={handleSave}>
                    {t("common.save")}
                </Button>
            </DialogActions>
        </Dialog>
    );
}
