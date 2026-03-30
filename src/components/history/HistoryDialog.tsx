/**
 * History Dialog Component
 *
 * This component has been refactored to use the universal history system.
 * It loads Todo history and displays it using the UniversalHistoryDialog
 * with a table view.
 *
 * The component maintains backward compatibility with the existing API
 * while using the new universal history components internally.
 */

import React, { useEffect, useCallback } from "react";
import { TodoId } from "../../types/todo";
import { Todo } from "../../types/todo";
import { Tag } from "../../types/tag";
import { useHistoryTimeTravel, todoSnapshotToObjectSnapshot } from "../../services/historyTimeTravelService";
import { UniversalHistoryDialog } from "../universalHistory";
import type { ObjectSnapshot } from "../../types/universalHistory";

export interface HistoryDialogProps {
    /** Whether the dialog is open */
    open: boolean;
    /** The todo ID to show history for */
    todoId: TodoId | null;
    /** The current todo state (for reference) */
    currentTodo: Todo | null;
    /** All available tags for displaying (kept for backward compatibility) */
    allTags: Tag[];
    /** Callback when dialog is closed */
    onClose: () => void;
}

/**
 * History Dialog Component
 *
 * Loads Todo history and displays it in a table view using the
 * universal history dialog component.
 */
export function HistoryDialog({
    open,
    todoId,
    currentTodo,
    onClose,
}: HistoryDialogProps) {
    const {
        historyState,
        loadTodoHistory,
        resetHistory,
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

    // Convert TodoSnapshots to universal ObjectSnapshots
    const universalSnapshots: ObjectSnapshot[] = React.useMemo(() => {
        if (!historyState?.snapshots) return [];

        return historyState.snapshots.map((todoSnapshot, index) => ({
            ...todoSnapshotToObjectSnapshot(todoSnapshot),
            version: index + 1,
        }));
    }, [historyState?.snapshots]);

    const dialogTitle = currentTodo?.title
        ? `History: ${currentTodo.title}`
        : "Todo History";

    // Note: allTags is kept for backward compatibility but not used
    // in the new table-based view

    return (
        <UniversalHistoryDialog
            open={open}
            snapshots={universalSnapshots}
            config={{
                tableName: "todo",
                columns: ["title", "description", "isCompleted", "completeAt", "tags"],
                fieldLabels: {
                    title: "Title",
                    description: "Description",
                    isCompleted: "Status",
                    completeAt: "Completion Date",
                    tags: "Tags",
                },
                valueFormatters: {
                    isCompleted: (value) => value === 1 ? "Completed" : "Incomplete",
                    completeAt: (value) => {
                        if (!value) return "Not set";
                        return new Date(value as number).toLocaleString([], {
                            month: "short",
                            day: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                        });
                    },
                    tags: (value) => {
                        if (!Array.isArray(value)) return "None";
                        if (value.length === 0) return "None";
                        return `${value.length} tag${value.length > 1 ? "s" : ""}`;
                    },
                },
            }}
            initialIndex={historyState?.currentIndex ?? -1}
            onClose={handleClose}
            title={dialogTitle}
            showNavigation={true}
        />
    );
}
