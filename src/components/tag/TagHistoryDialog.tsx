/**
 * Tag History Dialog Component
 *
 * This component displays the complete change history of a tag.
 * It loads Tag history and displays it using the UniversalHistoryDialog
 * with a table view showing name and color changes.
 *
 * The component follows the same pattern as HistoryDialog for todos.
 */

import React, { useEffect, useCallback } from "react";
import { TagId } from "../../types/tag";
import { Tag } from "../../types/tag";
import { useTagHistory, tagHistoryConfig } from "../../services/tagHistoryService";
import { UniversalHistoryDialog } from "../universalHistory";
import type { ObjectSnapshot } from "../../types/universalHistory";

export interface TagHistoryDialogProps {
  /** Whether the dialog is open */
  open: boolean;
  /** The tag ID to show history for */
  tagId: TagId | null;
  /** The current tag state (for reference) */
  currentTag: Tag | null;
  /** Callback when dialog is closed */
  onClose: () => void;
}

/**
 * Tag History Dialog Component
 *
 * Loads Tag history and displays it in a table view using the
 * universal history dialog component.
 */
export function TagHistoryDialog({
  open,
  tagId,
  currentTag,
  onClose,
}: TagHistoryDialogProps) {
  const {
    historyState,
    loadTagHistory,
    resetHistory,
  } = useTagHistory();

  // Load history when dialog opens with a tagId
  useEffect(() => {
    if (open && tagId) {
      void loadTagHistory(tagId);
    }
  }, [open, tagId, loadTagHistory]);

  // Reset history when dialog closes
  const handleClose = useCallback(() => {
    resetHistory();
    onClose();
  }, [resetHistory, onClose]);

  // Convert TagSnapshots to universal ObjectSnapshots
  const universalSnapshots: ObjectSnapshot[] = React.useMemo(() => {
    if (!historyState?.snapshots) return [];

    return historyState.snapshots.map((snapshot, index) => ({
      ...snapshot,
      version: index + 1,
    }));
  }, [historyState?.snapshots]);

  const dialogTitle = currentTag?.name
    ? `History: ${currentTag.name}`
    : "Tag History";

  return (
    <UniversalHistoryDialog
      open={open}
      snapshots={universalSnapshots}
      config={tagHistoryConfig}
      initialIndex={historyState?.currentIndex ?? -1}
      onClose={handleClose}
      title={dialogTitle}
      showNavigation={true}
    />
  );
}
