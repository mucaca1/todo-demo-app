import { useState } from "react";
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Paper,
    TextField,
    Typography,
} from "@mui/material";
import {
    Add as AddIcon,
    Edit as EditIcon,
    Delete as DeleteIcon,
    Label as LabelIcon,
    History as HistoryIcon,
} from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { TagChip } from "./TagChip";
import { TagHistoryDialog } from "./TagHistoryDialog";
import { Tag, TagId, TagCreateInput, TagUpdateInput } from "../../types/tag";
import { useTagService } from "../../services/tagService";

// Preset color palette
const COLOR_PALETTE = [
    "#f44336", // Red
    "#e91e63", // Pink
    "#9c27b0", // Purple
    "#673ab7", // Deep Purple
    "#3f51b5", // Indigo
    "#2196f3", // Blue
    "#03a9f4", // Light Blue
    "#00bcd4", // Cyan
    "#009688", // Teal
    "#4caf50", // Green
    "#8bc34a", // Light Green
    "#cddc39", // Lime
    "#ffeb3b", // Yellow
    "#ffc107", // Amber
    "#ff9800", // Orange
    "#ff5722", // Deep Orange
    "#795548", // Brown
    "#607d8b", // Blue Grey
    "#9e9e9e", // Grey
    "#000000", // Black
];

interface TagFormData {
    name: string;
    color: string;
}

interface TagEditorProps {
    tags: Tag[];
}

export function TagEditor({ tags }: TagEditorProps) {
    const { t } = useTranslation();
    const { createTag, updateTag, deleteTag } = useTagService();

    const [dialogOpen, setDialogOpen] = useState(false);
    const [editingTag, setEditingTag] = useState<Tag | null>(null);
    const [formData, setFormData] = useState<TagFormData>({
        name: "",
        color: COLOR_PALETTE[0],
    });
    const [deleteConfirmId, setDeleteConfirmId] = useState<TagId | null>(null);
    const [historyTagId, setHistoryTagId] = useState<TagId | null>(null);
    const [formError, setFormError] = useState<string | null>(null);

    const openCreateDialog = () => {
        setEditingTag(null);
        setFormData({ name: "", color: COLOR_PALETTE[0] });
        setFormError(null);
        setDialogOpen(true);
    };

    const openEditDialog = (tag: Tag) => {
        setEditingTag(tag);
        setFormData({ name: tag.name, color: tag.color });
        setFormError(null);
        setDialogOpen(true);
    };

    const closeDialog = () => {
        setDialogOpen(false);
        setEditingTag(null);
        setFormError(null);
    };

    const handleSave = () => {
        if (!formData.name.trim()) {
            setFormError(t("tags.nameRequired", "Tag name is required"));
            return;
        }

        if (editingTag) {
            const input: TagUpdateInput = {
                name: formData.name.trim(),
                color: formData.color,
            };
            const result = updateTag(editingTag.id, input);
            if (!result.ok) {
                setFormError(t("tags.updateError", "Failed to update tag"));
                return;
            }
        } else {
            const input: TagCreateInput = {
                name: formData.name.trim(),
                color: formData.color,
            };
            const result = createTag(input);
            if (!result.ok) {
                setFormError(t("tags.createError", "Failed to create tag"));
                return;
            }
        }

        closeDialog();
    };

    const handleDelete = (id: TagId) => {
        deleteTag(id);
        setDeleteConfirmId(null);
    };

    const handleColorSelect = (color: string) => {
        setFormData((prev) => ({ ...prev, color }));
    };

    return (
        <Box>
            {/* Header with Add button */}
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                <Typography variant="subtitle1" color="text.secondary">
                    {t("tags.count", { count: tags.length })}
                </Typography>
                <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    onClick={openCreateDialog}
                    size="small"
                >
                    {t("tags.addTag")}
                </Button>
            </Box>

            {/* Tags list */}
            {tags.length === 0 ? (
                <Paper
                    variant="outlined"
                    sx={{
                        p: 4,
                        textAlign: "center",
                        bgcolor: "background.default",
                    }}
                >
                    <LabelIcon sx={{ fontSize: 48, color: "text.disabled", mb: 1 }} />
                    <Typography variant="body1" color="text.secondary">
                        {t("tags.noTags")}
                    </Typography>
                    <Typography variant="body2" color="text.disabled" sx={{ mt: 0.5 }}>
                        {t("tags.noTagsHint")}
                    </Typography>
                </Paper>
            ) : (
                <Paper variant="outlined">
                    <List disablePadding>
                        {tags.map((tag, index) => (
                            <ListItem
                                key={tag.id}
                                divider={index < tags.length - 1}
                                secondaryAction={
                                    <Box sx={{ display: "flex", gap: 0.5 }}>
                                        <IconButton
                                            edge="end"
                                            size="small"
                                            onClick={() => setHistoryTagId(tag.id)}
                                            aria-label={t("tags.showHistory", "Show history")}
                                        >
                                            <HistoryIcon fontSize="small" />
                                        </IconButton>
                                        <IconButton
                                            edge="end"
                                            size="small"
                                            onClick={() => openEditDialog(tag)}
                                            aria-label={t("tags.editTag")}
                                        >
                                            <EditIcon fontSize="small" />
                                        </IconButton>
                                        <IconButton
                                            edge="end"
                                            size="small"
                                            color="error"
                                            onClick={() => setDeleteConfirmId(tag.id)}
                                            aria-label={t("tags.deleteTag")}
                                        >
                                            <DeleteIcon fontSize="small" />
                                        </IconButton>
                                    </Box>
                                }
                            >
                                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                    <Box
                                        sx={{
                                            width: 24,
                                            height: 24,
                                            borderRadius: 1,
                                            bgcolor: tag.color,
                                            flexShrink: 0,
                                        }}
                                    />
                                    <ListItemText
                                        primary={tag.name}
                                        primaryTypographyProps={{ fontWeight: 500 }}
                                    />
                                </Box>
                            </ListItem>
                        ))}
                    </List>
                </Paper>
            )}

            {/* Create/Edit Dialog */}
            <Dialog open={dialogOpen} onClose={closeDialog} maxWidth="sm" fullWidth>
                <DialogTitle>
                    {editingTag ? t("tags.editTag") : t("tags.addTag")}
                </DialogTitle>
                <DialogContent>
                    <Box sx={{ pt: 1, display: "flex", flexDirection: "column", gap: 3 }}>
                        {/* Name input */}
                        <TextField
                            autoFocus
                            label={t("tags.name")}
                            fullWidth
                            value={formData.name}
                            onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                            error={!!formError}
                            helperText={formError}
                        />

                        {/* Color picker */}
                        <Box>
                            <Typography variant="subtitle2" gutterBottom>
                                {t("tags.color")}
                            </Typography>
                            <Grid container spacing={1}>
                                {COLOR_PALETTE.map((color) => (
                                    <Grid key={color} size="auto">
                                        <Box
                                            onClick={() => handleColorSelect(color)}
                                            sx={{
                                                width: 32,
                                                height: 32,
                                                borderRadius: 1,
                                                bgcolor: color,
                                                cursor: "pointer",
                                                border: formData.color === color ? "2px solid" : "1px solid",
                                                borderColor: formData.color === color ? "primary.main" : "divider",
                                                transition: "transform 0.1s",
                                                "&:hover": {
                                                    transform: "scale(1.1)",
                                                },
                                            }}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>

                        {/* Preview */}
                        <Box>
                            <Typography variant="subtitle2" gutterBottom>
                                {t("tags.preview")}
                            </Typography>
                            {formData.name && (
                                <TagChip
                                    id={"preview" as TagId}
                                    name={formData.name}
                                    color={formData.color}
                                />
                            )}
                        </Box>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeDialog}>{t("common.cancel")}</Button>
                    <Button onClick={handleSave} variant="contained">
                        {t("common.save")}
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Delete Confirmation Dialog */}
            <Dialog
                open={deleteConfirmId !== null}
                onClose={() => setDeleteConfirmId(null)}
                maxWidth="xs"
            >
                <DialogTitle>{t("tags.deleteConfirmTitle")}</DialogTitle>
                <DialogContent>
                    <Typography>{t("tags.deleteConfirmMessage")}</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setDeleteConfirmId(null)}>
                        {t("common.cancel")}
                    </Button>
                    <Button
                        color="error"
                        variant="contained"
                        onClick={() => deleteConfirmId && handleDelete(deleteConfirmId)}
                    >
                        {t("tags.deleteTag")}
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Tag History Dialog */}
            <TagHistoryDialog
                open={historyTagId !== null}
                tagId={historyTagId}
                currentTag={tags.find(t => t.id === historyTagId) ?? null}
                onClose={() => setHistoryTagId(null)}
            />
        </Box>
    );
}
