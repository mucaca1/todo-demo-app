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

### [ ] Step: Add Icons to SettingsPage

Enhance visual hierarchy in `src/pages/SettingsPage.tsx` with icons.

- Add section header icons: StorageIcon (Data), KeyIcon (Owner), WarningIcon (Danger Zone)
- Add button icons: DownloadIcon, GroupAddIcon, RestoreIcon, DeleteForeverIcon
- Improve card styling with better spacing

**Verification**: Visual check of all icons, alignment, theme compatibility

---

### [ ] Step: Add Icons to TodoPage

Enhance visual appeal in `src/pages/TodoPage.tsx` with icons.

- Add section header icons: CheckBoxOutlineBlankIcon (Active), CheckBoxIcon (Finished)
- Add button icons: AddIcon for add todo button
- Improve empty state visuals

**Verification**: Visual check, responsive behavior, both themes

---

### [ ] Step: Final Verification and Report

Run full verification and create implementation report.

- Run type checking: `npm run type-check`
- Run linting: `npm run lint`
- Run build: `npm run build`
- Manual testing of all visual changes
- Write report to `.zenflow/tasks/new-task-44c7/report.md`
