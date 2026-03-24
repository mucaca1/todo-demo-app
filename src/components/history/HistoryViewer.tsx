import React from "react";
import { Box, Paper, Typography, Stack, Chip, SxProps, Theme } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { TodoSnapshot } from "../../types/historyTimeTravel";
import { Tag } from "../../types/tag";
import { TagChip } from "../tag";

export interface HistoryViewerProps {
    /** The snapshot to display */
    snapshot: TodoSnapshot | null;
    /** All available tags for displaying tag chips */
    allTags: Tag[];
    /** Whether this snapshot represents the current state of the todo */
    isCurrentState: boolean;
}

const currentStateStyles: SxProps<Theme> = {
    border: 2,
};

export function HistoryViewer({ snapshot, allTags, isCurrentState }: HistoryViewerProps) {
    if (!snapshot) {
        return (
            <Box sx={{ p: 3, textAlign: "center", color: "text.secondary" }}>
                <Typography variant="body1">No snapshot selected</Typography>
            </Box>
        );
    }

    const isCompleted = snapshot.isCompleted === 1;

    return (
        <Paper
            sx={{
                p: 2,
                ...(isCurrentState ? currentStateStyles : {}),
            }}
        >
            <Stack spacing={2}>
                {/* Title with completion status */}
                <Stack direction="row" alignItems="center" spacing={1}>
                    {isCompleted ? (
                        <CheckCircleIcon color="success" fontSize="small" />
                    ) : (
                        <CancelIcon color="disabled" fontSize="small" />
                    )}
                    <Typography variant="h6" component="span">
                        {snapshot.title || <em>No title</em>}
                    </Typography>
                </Stack>

                {/* Description */}
                {snapshot.description && (
                    <Typography variant="body2" color="text.secondary">
                        {snapshot.description}
                    </Typography>
                )}

                {/* Completion date */}
                {snapshot.completeAt && (
                    <Typography variant="caption" color="text.secondary">
                        Completed: {new Date(snapshot.completeAt).toLocaleString()}
                    </Typography>
                )}

                {/* Current state indicator */}
                {isCurrentState && (
                    <Chip
                        label="Current State"
                        color="primary"
                        size="small"
                        sx={{ alignSelf: "flex-start" }}
                    />
                )}

                {/* Timestamp info */}
                {!isCurrentState && (
                    <Typography variant="caption" color="text.secondary">
                        Snapshot from: {new Date(snapshot.timestamp).toLocaleString()}
                    </Typography>
                )}
            </Stack>
        </Paper>
    );
}
