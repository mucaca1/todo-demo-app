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
import { Tag, TagId } from "../../types/tag";
import { TagSelector } from "../tag";

export interface TodoFormProps {
    open: boolean;
    editingTodo: Todo | null;
    allTags: Tag[];
    onSave: (title: string, description: string, tagIds: TagId[]) => void;
    onClose: () => void;
}

export function TodoForm({ open, editingTodo, allTags, onSave, onClose }: TodoFormProps) {
    const { t } = useTranslation();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [selectedTagIds, setSelectedTagIds] = useState<TagId[]>([]);

    // Reset form when opening/closing or when editingTodo changes
    useEffect(() => {
        if (open) {
            if (editingTodo) {
                setTitle(editingTodo.title);
                setDescription(editingTodo.description || "");
                setSelectedTagIds(editingTodo.tags || []);
            } else {
                setTitle("");
                setDescription("");
                setSelectedTagIds([]);
            }
        }
    }, [open, editingTodo]);

    const handleSave = () => {
        if (!title.trim()) return;
        // Safely handle null/undefined with nullish coalescing
        const trimmedDescription = description?.trim() ?? "";
        onSave(title.trim(), trimmedDescription, selectedTagIds);
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
                    <TagSelector
                        allTags={allTags}
                        selectedTagIds={selectedTagIds}
                        onChange={setSelectedTagIds}
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
