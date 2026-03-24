import React from "react";
import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Typography,
    Stack,
    Chip,
    SxProps,
    Theme,
    alpha,
} from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { TimelineEntry, FieldChange } from "../../types/historyTimeTravel";

export interface HistoryTimelineProps {
    /** Timeline entries to display */
    entries: TimelineEntry[];
    /** Index of the currently selected entry (0 = oldest) */
    selectedIndex: number;
    /** Callback when user clicks on a timeline entry */
    onSelectEntry: (index: number) => void;
}

// Entry type for styling decisions
type EntryType = "actual" | "selected" | "past";

const getEntryType = (index: number, selectedIndex: number, totalEntries: number): EntryType => {
    // First (oldest) entry is the creation event
    if (index === 0) return "actual";
    // Currently selected entry
    if (index === selectedIndex) return "selected";
    // All others are past events
    return "past";
};

const getEntryStyles = (entryType: EntryType): SxProps<Theme> => {
    switch (entryType) {
        case "actual":
            return {
                bgcolor: alpha("#72d476", 0.1),
                borderLeft: 4,
                borderLeftColor: "success.main",
            };
        case "selected":
            return {
                bgcolor: alpha("#ffc107", 0.15),
                borderLeft: 4,
                borderLeftColor: "warning.main",
            };
        case "past":
        default:
            return {
                borderLeft: 4,
                borderLeftColor: "action.disabledBackground",
            };
    }
};

const getIconColor = (entryType: EntryType): "success" | "warning" | "disabled" => {
    switch (entryType) {
        case "actual":
            return "success";
        case "selected":
            return "warning";
        case "past":
        default:
            return "disabled";
    }
};

const formatDate = (date: Date): string => {
    const now = new Date();
    const isToday = date.toDateString() === now.toDateString();

    if (isToday) {
        return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    }

    const yesterday = new Date(now);
    yesterday.setDate(yesterday.getDate() - 1);
    const isYesterday = date.toDateString() === yesterday.toDateString();

    if (isYesterday) {
        return `Yesterday ${date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`;
    }

    return date.toLocaleString([], {
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });
};

const formatValue = (value: unknown): string => {
    if (value === null) return "null";
    if (value === undefined) return "undefined";
    if (typeof value === "boolean") return value ? "true" : "false";
    if (typeof value === "number") return value.toString();
    if (typeof value === "string") {
        // Handle empty strings
        if (value === "") return '(empty)';
        // Handle ISO date strings for completeAt
        if (value.match(/^\d{4}-\d{2}-\d{2}T/)) {
            return new Date(value).toLocaleString();
        }
        return value;
    }
    return JSON.stringify(value);
};

const getColumnName = (column: string): string => {
    // Convert column names to user-friendly labels
    switch (column) {
        case "title":
            return "Title";
        case "description":
            return "Description";
        case "isCompleted":
            return "Status";
        case "completeAt":
            return "Completion Date";
        default:
            // Convert camelCase to Title Case
            return column
                .replace(/([A-Z])/g, " $1")
                .replace(/^./, (str) => str.toUpperCase());
    }
};

const FieldChangeChip: React.FC<{ change: FieldChange; isCreate: boolean }> = ({ change, isCreate }) => {
    if (isCreate) {
        // For creation event, just show the field name as "added"
        return (
            <Chip
                size="small"
                label={`${getColumnName(change.column)}: ${formatValue(change.newValue)}`}
                variant="outlined"
                sx={{ fontSize: "0.75rem" }}
            />
        );
    }

    // For updates, show old → new
    return (
        <Chip
            size="small"
            label={`${getColumnName(change.column)}: ${formatValue(change.oldValue)} → ${formatValue(change.newValue)}`}
            variant="outlined"
            sx={{ fontSize: "0.75rem" }}
        />
    );
};

const TimelineEntryComponent: React.FC<{
    entry: TimelineEntry;
    entryType: EntryType;
    index: number;
    onClick: () => void;
}> = ({ entry, entryType, index, onClick }) => {
    const styles = getEntryStyles(entryType);
    const iconColor = getIconColor(entryType);

    return (
        <ListItem
            disablePadding
            sx={{
                mb: 1,
                borderRadius: 1,
                overflow: "hidden",
                ...styles,
            }}
        >
            <ListItemButton
                onClick={onClick}
                dense
                sx={{
                    py: 1.5,
                    px: 2,
                    "&.Mui-focusVisible": {
                        bgcolor: "action.focus",
                    },
                }}
            >
                <FiberManualRecordIcon
                    color={iconColor}
                    sx={{
                        mr: 2,
                        fontSize: "0.75rem",
                        flexShrink: 0,
                    }}
                />
                <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Stack spacing={0.5}>
                        <Typography
                            variant="caption"
                            color="text.secondary"
                            sx={{ fontWeight: "medium" }}
                        >
                            {formatDate(entry.date)}
                        </Typography>
                        <Stack
                            direction="row"
                            spacing={0.5}
                            flexWrap="wrap"
                            useFlexGap
                        >
                            {entry.changes.map((change, idx) => (
                                <FieldChangeChip
                                    key={`${change.column}-${idx}`}
                                    change={change}
                                    isCreate={entryType === "actual"}
                                />
                            ))}
                        </Stack>
                    </Stack>
                </Box>
            </ListItemButton>
        </ListItem>
    );
};

export function HistoryTimeline({ entries, selectedIndex, onSelectEntry }: HistoryTimelineProps) {
    if (entries.length === 0) {
        return (
            <Box sx={{ p: 3, textAlign: "center", color: "text.secondary" }}>
                <Typography variant="body2">No history available</Typography>
            </Box>
        );
    }

    // Display entries in reverse order (newest first)
    // But selectedIndex is based on original order (0 = oldest)
    const displayIndex = (entries.length - 1) - selectedIndex;

    return (
        <Box>
            <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1, px: 2 }}>
                Timeline
            </Typography>
            <List disablePadding>
                {entries
                    .map((entry, originalIndex) => (
                        <TimelineEntryComponent
                            key={entry.timestamp}
                            entry={entry}
                            entryType={getEntryType(originalIndex, selectedIndex, entries.length)}
                            index={originalIndex}
                            onClick={() => onSelectEntry(originalIndex)}
                        />
                    ))}
            </List>
        </Box>
    );
}
