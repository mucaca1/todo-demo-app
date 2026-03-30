/**
 * History components barrel export
 *
 * Exports both the legacy Todo-specific history components and the
 * new universal history components that work with any object type.
 */

// Legacy Todo-specific components (kept for backward compatibility)
export { HistoryViewer } from './HistoryViewer';
export type { HistoryViewerProps } from './HistoryViewer';

export { HistoryTimeline } from './HistoryTimeline';
export type { HistoryTimelineProps } from './HistoryTimeline';

export { HistoryDialog } from './HistoryDialog';
export type { HistoryDialogProps } from './HistoryDialog';

// Universal history components (new, generic system)
export * from '../universalHistory';
