# Spec and build

## Configuration
- **Artifacts Path**: {@artifacts_path} → `.zenflow/tasks/{task_id}`

---

## Agent Instructions

Ask the user questions when anything is unclear or needs their input. This includes:
- Ambiguous or incomplete requirements
- Technical decisions that affect architecture or user experience
- Trade-offs that require business context

Do not make assumptions on important decisions — get clarification first.

If you are blocked and need user clarification, mark the current step with `[!]` in plan.md before stopping.

---

## Workflow Steps

### [x] Step: Technical Specification
<!-- chat-id: b0962cd8-36b7-41e0-ade5-6f00ca0be614 -->

Technical specification completed and saved to `.zenflow/tasks/new-task-44c7/spec.md`.

**Assessment**: Medium difficulty - Moderate complexity with styling enhancements and component modifications. No architectural changes needed.

**Key Findings**:
- Project uses React 19 + TypeScript with Material-UI v7.1.2
- `SecretReadOnlyField` component needs blur effect and multiline display
- SettingsPage and TodoPage can be enhanced with icons
- All changes are visual/styling only - low risk

---

### [x] Step: Enhance SecretReadOnlyField Component
<!-- chat-id: 18b918cb-aede-4a83-9d48-9cabc640f6aa -->

Implemented mnemonic blur effect and multiline display in `src/components/SecretReadOnlyField.tsx`.

**Changes Made**:
- Added CSS blur filter when mnemonic is hidden (`filter: blur(${blurIntensity}px)`)
- Added smooth 0.3s ease-in-out transition animation between hidden/shown states
- Implemented multiline display when shown (format mnemonic into word groups of 4 words per line)
- Added `userSelect: none` when blurred to prevent copying hidden content
- Updated TypeScript interface with new optional props:
  - `multiline?: boolean` (default: true) - Enable/disable multiline display
  - `blurIntensity?: number` (default: 8) - Customizable blur strength
  - `wordsPerLine?: number` (default: 4) - Words per line in multiline mode
- Added `formatMnemonic()` helper function to split mnemonic into readable groups
- Used MUI `Stack` and `Typography` for proper multiline styling with monospace font
- Build verified: `npx vite build --mode development` completed successfully

---

### [x] Step: Add Icons to SettingsPage
<!-- chat-id: 3ee16f59-c2da-42ab-8f52-8999eca7dd7a -->

Enhanced visual hierarchy in `src/pages/SettingsPage.tsx` with icons.

**Changes Made**:
- Added section header icons with Stack layout:
  - StorageIcon (primary color) for Data section
  - KeyIcon (primary color) for Owner section
  - WarningIcon (error color) for Danger Zone section
- Added button startIcon props:
  - DownloadIcon for "Download Database" button
  - GroupAddIcon for "Create Shared Owner" button
  - RestoreIcon for "Restore App Owner" button (color: warning)
  - DeleteForeverIcon for "Delete Account" button (color: error)
- Improved styling:
  - Changed "Create Shared Owner" button to `variant="outlined"` for consistency
  - Added `color="warning"` to Restore button for better visual hierarchy in Danger Zone
- Build verified: `npx vite build --mode development` completed successfully

---

### [x] Step: Add Icons to TodoPage
<!-- chat-id: 0b25e22b-1108-4442-ad05-034ba48064e0 -->

Enhanced visual appeal in `src/pages/TodoPage.tsx` with icons.

**Changes Made**:
- Added section header icons with Stack layout:
  - PlaylistAddCheckIcon (primary color) for main title "Todos"
  - CheckBoxOutlineBlankIcon (primary color) for "Active" section
  - CheckBoxIcon (success color) for "Finished" section
- Added button startIcon:
  - AddIcon for "Add Todo" button
- Improved empty state visuals:
  - Added centered text alignment
  - Added vertical padding (py={3})
  - Added italic style with reduced opacity for visual subtlety
- Build verified: `npx vite build --mode development` completed successfully

---

### [ ] Step: Final Verification and Report

Run full verification and create implementation report.

- Run type checking: `npm run type-check`
- Run linting: `npm run lint`
- Run build: `npm run build`
- Manual testing of all visual changes
- Write report to `.zenflow/tasks/new-task-44c7/report.md`
