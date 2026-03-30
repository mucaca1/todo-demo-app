/**
 * Universal History Dialog Component
 *
 * Generic dialog component for viewing object history.
 * Displays two tables:
 * - Current State Comparison: Selected vs previous snapshot
 * - History Timeline: All versions with change summaries
 * Navigation controls highlight and select versions in both tables.
 */

import React, { useState, useCallback } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
  Typography,
  Box,
  Toolbar,
  Tooltip,
} from "@mui/material";
import {
  ArrowBack as ArrowBackIcon,
  ArrowForward as ArrowForwardIcon,
  LastPage as LastPageIcon,
} from "@mui/icons-material";
import type {
  ObjectSnapshot,
  HistoryConfig,
  HistoryState,
} from "../../types/universalHistory";
import { UniversalHistoryTable } from "./UniversalHistoryTable";

export interface UniversalHistoryDialogProps<T = Record<string, unknown>> {
  /** Whether the dialog is open */
  open: boolean;
  /** Pre-computed snapshots to display */
  snapshots: ObjectSnapshot<T>[];
  /** History configuration */
  config: HistoryConfig<T>;
  /** Initial snapshot index to select (default: latest) */
  initialIndex?: number;
  /** Callback when dialog is closed */
  onClose: () => void;
  /** Optional title override */
  title?: string;
  /** Whether to show navigation controls (default: true) */
  showNavigation?: boolean;
}

/**
 * Universal History Dialog Component
 *
 * Displays a modal dialog with:
 * - Current State Comparison table (selected vs previous)
 * - History Timeline table (all versions)
 * - Navigation controls (back/forward buttons for timeline selection)
 *
 * Accepts pre-computed snapshots for flexibility.
 * The caller is responsible for loading history from Evolu.
 *
 * Note: Navigation controls highlight and select versions in both tables.
 * The Current State Comparison table shows the selected snapshot compared
 * with the previous snapshot.
 */
export function UniversalHistoryDialog<T = Record<string, unknown>>({
  open,
  snapshots,
  config,
  initialIndex = -1,
  onClose,
  title,
  showNavigation = true,
}: UniversalHistoryDialogProps<T>): React.ReactElement | null {
  // Initialize with the last snapshot (latest version)
  const [selectedIndex, setSelectedIndex] = useState<number>(
    initialIndex === -1 ? snapshots.length - 1 : initialIndex
  );

  // Reset selection when dialog opens/closes or snapshots change
  React.useEffect(() => {
    if (open && snapshots.length > 0) {
      setSelectedIndex(
        initialIndex === -1 ? snapshots.length - 1 : initialIndex
      );
    }
  }, [open, snapshots.length, initialIndex]);

  const canGoBack = selectedIndex > 0;
  const canGoForward = selectedIndex < snapshots.length - 1;

  const handleGoBack = useCallback(() => {
    if (canGoBack) {
      setSelectedIndex((prev) => prev - 1);
    }
  }, [canGoBack]);

  const handleGoForward = useCallback(() => {
    if (canGoForward) {
      setSelectedIndex((prev) => prev + 1);
    }
  }, [canGoForward]);

  const handleSnapshotSelect = useCallback((index: number) => {
    setSelectedIndex(index);
  }, []);

  const handleJumpToLatest = useCallback(() => {
    setSelectedIndex(snapshots.length - 1);
  }, [snapshots.length]);

  const selectedSnapshot = snapshots[selectedIndex];

  if (!open) {
    return null;
  }

  const displayTitle = title ?? `History - ${config.tableName}`;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xl"
      fullWidth
      scroll="paper"
    >
      <DialogTitle>{displayTitle}</DialogTitle>

      {showNavigation && selectedSnapshot && (
        <Box sx={{ px: 3, pb: 1 }}>
          <Toolbar
            disableGutters
            sx={{
              gap: 1,
              bgcolor: "action.hover",
              borderRadius: 1,
              px: 2,
              py: 1,
            }}
          >
            <Tooltip title="Previous version">
              <span>
                <IconButton
                  onClick={handleGoBack}
                  disabled={!canGoBack}
                  aria-label="Go to previous version"
                >
                  <ArrowBackIcon />
                </IconButton>
              </span>
            </Tooltip>

            <Tooltip title="Next version">
              <span>
                <IconButton
                  onClick={handleGoForward}
                  disabled={!canGoForward}
                  aria-label="Go to next version"
                >
                  <ArrowForwardIcon />
                </IconButton>
              </span>
            </Tooltip>

            <Box sx={{ flex: 1, textAlign: "center" }}>
              <Typography variant="body2" color="text.secondary">
                Timeline selection: v{selectedSnapshot.version} of {snapshots.length}
                {" • "}
                {new Date(selectedSnapshot.timestamp).toLocaleString([], {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </Typography>
              <Typography variant="caption" color="text.disabled">
                Both tables show the selected version
              </Typography>
            </Box>

            <Tooltip title="Jump to latest version">
              <span>
                <IconButton
                  onClick={handleJumpToLatest}
                  disabled={selectedIndex === snapshots.length - 1}
                  aria-label="Jump to latest version"
                >
                  <LastPageIcon />
                </IconButton>
              </span>
            </Tooltip>
          </Toolbar>
        </Box>
      )}

      <DialogContent>
        {snapshots.length === 0 ? (
          <Box sx={{ textAlign: "center", py: 4 }}>
            <Typography variant="body1" color="text.secondary">
              No history available
            </Typography>
          </Box>
        ) : (
          <UniversalHistoryTable
            snapshots={snapshots}
            config={config}
            selectedIndex={selectedIndex}
            onSnapshotSelect={handleSnapshotSelect}
          />
        )}
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
