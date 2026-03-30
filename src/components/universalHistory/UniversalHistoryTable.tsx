/**
 * Universal History Table Component
 *
 * Generic table component for displaying object history using a two-table design:
 * 1. Current State Comparison: Shows selected vs previous snapshot comparison
 * 2. History Timeline: Shows chronological list of all versions with change summaries
 *    (First snapshot shows all fields; subsequent snapshots show only changed fields)
 */

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  SxProps,
  Theme,
  Typography,
  Box,
  Divider,
} from "@mui/material";
import type {
  ObjectSnapshot,
  HistoryConfig,
} from "../../types/universalHistory";
import {
  compareSnapshots,
  getFieldLabel,
  formatFieldValue,
} from "../../services/universalHistoryService";

export interface UniversalHistoryTableProps<T = Record<string, unknown>> {
  /** Array of snapshots to display (chronological order, oldest first) */
  snapshots: ObjectSnapshot<T>[];
  /** History configuration */
  config: HistoryConfig<T>;
  /** Index of currently selected snapshot in timeline */
  selectedIndex?: number;
  /** Optional callback when a snapshot is selected */
  onSnapshotSelect?: (index: number) => void;
  /** Optional MUI sx prop for custom styling */
  sx?: SxProps<Theme>;
}

/**
 * Cell content display component with change indicator
 */
interface CellContentProps {
  value: string;
  changed: boolean;
  deleted: boolean;
}

const CellContent: React.FC<CellContentProps> = ({ value, changed, deleted }) => {
  if (deleted) {
    return (
      <Typography
        component="span"
        sx={{
          textDecoration: "line-through",
          color: "text.disabled",
          fontStyle: "italic",
        }}
      >
        {value}
      </Typography>
    );
  }

  if (changed) {
    return (
      <Box
        sx={{
          backgroundColor: "action.hover",
          px: 1,
          py: 0.5,
          borderRadius: 1,
          fontWeight: 500,
        }}
      >
        {value}
      </Box>
    );
  }

  return <span>{value}</span>;
};

/**
 * Table 1: Current State Comparison
 *
 * Compares the selected snapshot with the previous snapshot, showing ALL fields.
 */
interface CurrentStateComparisonProps<T> {
  snapshots: ObjectSnapshot<T>[];
  config: HistoryConfig<T>;
  selectedIndex?: number;
  sx?: SxProps<Theme>;
}

function CurrentStateComparison<T>({
  snapshots,
  config,
  selectedIndex,
  sx,
}: CurrentStateComparisonProps<T>): React.ReactElement | null {
  if (snapshots.length === 0) {
    return null;
  }

  // Use selectedIndex if provided and valid, otherwise default to latest snapshot
  const selectedIndexOrDefault = (selectedIndex !== undefined && selectedIndex >= 0 && selectedIndex < snapshots.length)
    ? selectedIndex
    : snapshots.length - 1;
  const selectedSnapshot = snapshots[selectedIndexOrDefault];

  // Safety check: if selectedSnapshot is undefined, return null
  // This can happen if selectedIndex is out of bounds or snapshots array is malformed
  if (!selectedSnapshot) {
    return null;
  }

  const previousSnapshot = selectedIndexOrDefault > 0 ? snapshots[selectedIndexOrDefault - 1] : null;

  // Compare selected with previous to detect changes
  const fieldChanges = React.useMemo(() => {
    return compareSnapshots(previousSnapshot, selectedSnapshot, config);
  }, [previousSnapshot, selectedSnapshot, config]);

  // Create a map of changed fields for quick lookup
  const changeMap = React.useMemo(() => {
    const map = new Map<string, { changed: boolean; deleted: boolean }>();
    for (const change of fieldChanges) {
      map.set(change.column, { changed: change.changed, deleted: change.deleted });
    }
    return map;
  }, [fieldChanges]);

  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="h6" sx={{ mb: 1 }}>
        Current State Comparison
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
        Comparing version v{selectedSnapshot.version} with {previousSnapshot ? `previous version (v${previousSnapshot.version})` : "initial state"}
      </Typography>
      <TableContainer component={Paper} sx={sx}>
        <Table stickyHeader size="small">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Column</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Prev</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Next</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {config.columns.map((column) => {
              const columnStr = String(column);
              const label = getFieldLabel(columnStr, config);

              const prevValue = previousSnapshot?.data[columnStr as keyof T];
              const nextValue = selectedSnapshot.data[columnStr as keyof T];

              const formattedPrev = prevValue !== undefined
                ? formatFieldValue(columnStr, prevValue, config)
                : null;
              const formattedNext = formatFieldValue(columnStr, nextValue, config);

              const changeInfo = changeMap.get(columnStr) ?? { changed: false, deleted: false };

              return (
                <TableRow key={columnStr}>
                  <TableCell sx={{ fontWeight: 500 }}>
                    {label}
                  </TableCell>
                  <TableCell>
                    {previousSnapshot ? (
                      <CellContent
                        value={formattedPrev ?? "Empty"}
                        changed={changeInfo.changed}
                        deleted={false}
                      />
                    ) : (
                      <Typography
                        component="span"
                        sx={{ color: "text.disabled", fontStyle: "italic" }}
                      >
                        -
                      </Typography>
                    )}
                  </TableCell>
                  <TableCell>
                    <CellContent
                      value={formattedNext}
                      changed={changeInfo.changed}
                      deleted={changeInfo.deleted}
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

/**
 * Table 2: History Timeline
 *
 * Shows chronological list of all versions with change summaries.
 * First snapshot shows all fields; subsequent snapshots show only changed fields.
 */
interface HistoryTimelineProps<T> {
  snapshots: ObjectSnapshot<T>[];
  config: HistoryConfig<T>;
  selectedIndex?: number;
  onSnapshotSelect?: (index: number) => void;
  sx?: SxProps<Theme>;
}

function HistoryTimeline<T>({
  snapshots,
  config,
  selectedIndex,
  onSnapshotSelect,
  sx,
}: HistoryTimelineProps<T>): React.ReactElement | null {
  if (snapshots.length === 0) {
    return null;
  }

  // Generate change summaries for each snapshot
  const timelineRows = React.useMemo(() => {
    return snapshots.map((snapshot, index) => {
      const prevSnapshot = index > 0 ? snapshots[index - 1] : null;
      const fieldChanges = compareSnapshots(prevSnapshot, snapshot, config);

      // Build summary
      const summaryParts: string[] = [];

      if (index === 0) {
        // First snapshot: show ALL fields (since everything is new)
        for (const column of config.columns) {
          const columnStr = String(column);
          const label = getFieldLabel(columnStr, config);
          const currentValue = snapshot.data[columnStr as keyof T];
          const formattedCurrent = formatFieldValue(columnStr, currentValue, config);
          summaryParts.push(`${label}: ${formattedCurrent}`);
        }
      } else {
        // Subsequent snapshots: show ONLY fields that changed
        const changedFields = fieldChanges.filter((change) => change.changed);

        for (const change of changedFields) {
          const label = getFieldLabel(change.column, config);
          const formattedPrev = formatFieldValue(change.column, change.oldValue, config);
          const formattedNext = formatFieldValue(change.column, change.newValue, config);
          summaryParts.push(`${label}: ${formattedPrev} → ${formattedNext}`);
        }
      }

      return {
        version: snapshot.version,
        timestamp: snapshot.timestamp,
        snapshotIndex: index,
        summary: summaryParts.join(", "),
      };
    });
  }, [snapshots, config]);

  // Reverse to show newest first
  const displayRows = [...timelineRows].reverse();

  return (
    <Box>
      <Typography variant="h6" sx={{ mb: 1 }}>
        History Timeline
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
        All changes across all versions (first snapshot shows all fields)
      </Typography>
      <TableContainer component={Paper} sx={sx}>
        <Table stickyHeader size="small">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold", width: 60 }}>Version</TableCell>
              <TableCell sx={{ fontWeight: "bold", width: 140 }}>Time</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Changes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayRows.map((row) => {
              const isSelected = selectedIndex === row.snapshotIndex;

              return (
                <TableRow
                  key={`${row.version}-${row.snapshotIndex}`}
                  hover
                  onClick={() => onSnapshotSelect?.(row.snapshotIndex)}
                  selected={isSelected}
                  sx={{
                    cursor: onSnapshotSelect ? "pointer" : "default",
                    ...(isSelected && {
                      backgroundColor: "action.selected",
                      "&:hover": {
                        backgroundColor: "action.selected",
                      },
                    }),
                  }}
                >
                  <TableCell sx={{ fontWeight: "medium", fontSize: "0.75rem" }}>
                    v{row.version}
                  </TableCell>
                  <TableCell sx={{ fontSize: "0.75rem" }}>
                    {new Date(row.timestamp).toLocaleString([], {
                      month: "short",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: "monospace",
                        fontSize: "0.75rem",
                        wordBreak: "break-word",
                      }}
                    >
                      {row.summary}
                    </Typography>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

/**
 * Universal History Table Component
 *
 * Displays a two-table design:
 * 1. Current State Comparison: Shows selected vs previous snapshot for ALL fields
 * 2. History Timeline: Shows chronological list with version summaries
 *    (First snapshot shows all fields; subsequent snapshots show only changed fields)
 *
 * The selectedIndex controls which row is highlighted in the timeline AND
 * which snapshot is shown in the Current State Comparison table.
 */
export function UniversalHistoryTable<T = Record<string, unknown>>({
  snapshots,
  config,
  selectedIndex,
  onSnapshotSelect,
  sx,
}: UniversalHistoryTableProps<T>): React.ReactElement | null {
  if (snapshots.length === 0) {
    return (
      <Box sx={{ textAlign: "center", py: 4 }}>
        <Typography variant="body1" color="text.secondary">
          No history available
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={sx}>
      <CurrentStateComparison
        snapshots={snapshots}
        config={config}
        selectedIndex={selectedIndex}
      />

      <Divider sx={{ my: 3 }} />

      <HistoryTimeline
        snapshots={snapshots}
        config={config}
        selectedIndex={selectedIndex}
        onSnapshotSelect={onSnapshotSelect}
      />
    </Box>
  );
}
