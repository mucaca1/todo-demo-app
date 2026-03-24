import React, { useEffect, useCallback } from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    IconButton,
    Stack,
    Box,
    Typography,
    Divider,
    SxProps,
    Theme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import HistoryIcon from "@mui/icons-material/History";
import { TodoId } from "../../types/todo";
import { Todo } from "../../types/todo";
import { Tag } from "../../types/tag";
import { useHistoryTimeTravel } from "../../services/historyTimeTravelService";
import { HistoryViewer } from "./HistoryViewer";
import { HistoryTimeline } from "./HistoryTimeline";

export interface HistoryDialogProps {
    /** Whether the dialog is open */
    open: boolean;
    /** The todo ID to show history for */
    todoId: TodoId | null;
    /** The current todo state (for reference) */
    currentTodo: Todo | null;
    /** All available tags for displaying */
    allTags: Tag[];
    /** Callback when dialog is closed */
    onClose: () => void;
}

const dialogContentStyles: SxProps<Theme> = {
    minHeight: 400,
    maxHeight: 600,
};

export function HistoryDialog({
    open,
    todoId,
    currentTodo,
    allTags,
    onClose,
}: HistoryDialogProps) {
    const {
        historyState,
        loadTodoHistory,
        goBack,
        goForward,
        jumpToSnapshot,
        resetHistory,
        getTimelineEntries,
        isCurrentState,
    } = useHistoryTimeTravel();

    // Load history when dialog opens with a todoId
    useEffect(() => {
        if (open && todoId) {
            void loadTodoHistory(todoId);
        }
    }, [open, todoId, loadTodoHistory]);

    // Reset history when dialog closes
    const handleClose = useCallback(() => {
        resetHistory();
        onClose();
    }, [resetHistory, onClose]);

    // Handle timeline entry click
    const handleSelectEntry = useCallback(
        (index: number) => {
            jumpToSnapshot(index);
        },
        [jumpToSnapshot]
    );

    // Handle back button
    const handleBack = useCallback(() => {
        goBack();
    }, [goBack]);

    // Handle forward button
    const handleForward = useCallback(() => {
        goForward();
    }, [goForward]);

    const timelineEntries = getTimelineEntries();
    const currentIndex = historyState?.currentIndex ?? 0;
    const totalSnapshots = historyState?.snapshots.length ?? 0;
    const snapshot = historyState?.currentSnapshot ?? null;

    // Display as "Step X of Y" where 1 is the oldest/initial state
    const stepNumber = totalSnapshots > 0 ? currentIndex + 1 : 0;
    const stepLabel =
        totalSnapshots > 0 ? `Step ${stepNumber} of ${totalSnapshots}` : "No history";

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            maxWidth="md"
            fullWidth
            PaperProps={{
                sx: {
                    maxHeight: "80vh",
                },
            }}
        >
            <DialogTitle>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <HistoryIcon color="primary" />
                        <Typography variant="h6">
                            {currentTodo?.title
                                ? `History: ${currentTodo.title}`
                                : "Todo History"}
                        </Typography>
                    </Stack>
                    <IconButton onClick={handleClose} edge="end">
                        <CloseIcon />
                    </IconButton>
                </Stack>
            </DialogTitle>

            <Divider />

            <DialogContent sx={dialogContentStyles}>
                {historyState === null ? (
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            minHeight: 300,
                        }}
                    >
                        <Typography color="text.secondary">Loading history...</Typography>
                    </Box>
                ) : totalSnapshots === 0 ? (
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            minHeight: 300,
                        }}
                    >
                        <Typography color="text.secondary">No history available for this todo</Typography>
                    </Box>
                ) : (
                    <Stack spacing={2}>
                        {/* Navigation controls */}
                        <Stack
                            direction="row"
                            alignItems="center"
                            justifyContent="space-between"
                            spacing={2}
                            sx={{
                                bgcolor: "action.hover",
                                p: 2,
                                borderRadius: 1,
                            }}
                        >
                            <Button
                                startIcon={<ArrowBackIcon />}
                                onClick={handleBack}
                                disabled={!historyState.canGoBack}
                                variant="outlined"
                                size="small"
                            >
                                Back
                            </Button>

                            <Typography variant="body2" color="text.secondary">
                                {stepLabel}
                            </Typography>

                            <Button
                                endIcon={<ArrowForwardIcon />}
                                onClick={handleForward}
                                disabled={!historyState.canGoForward}
                                variant="outlined"
                                size="small"
                            >
                                Forward
                            </Button>
                        </Stack>

                        {/* Snapshot preview */}
                        <Box>
                            <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                                Preview
                            </Typography>
                            <HistoryViewer
                                snapshot={snapshot}
                                allTags={allTags}
                                isCurrentState={isCurrentState()}
                            />
                        </Box>

                        <Divider />

                        {/* Timeline */}
                        <Box sx={{ flex: 1, overflow: "auto" }}>
                            <HistoryTimeline
                                entries={timelineEntries}
                                selectedIndex={currentIndex}
                                onSelectEntry={handleSelectEntry}
                            />
                        </Box>
                    </Stack>
                )}
            </DialogContent>

            <DialogActions>
                <Button onClick={handleClose} variant="contained">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
}
