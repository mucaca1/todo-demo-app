# Technical Specification: UI Graphics Enhancement

## Overview

**Task**: Update page graphics to make the interface more beautiful for users.
**Key Requirements**:
1. Add mnemonic blur effect when hidden
2. Make mnemonic display multiline when shown
3. General visual improvements for better user experience
4. Add icons where appropriate for better UX

**Difficulty Level**: Medium
- Moderate complexity: Requires CSS/styling enhancements, component modifications, and understanding of MUI theming
- Some edge cases: Blur compatibility, multiline layout handling, responsive design
- No architectural changes needed

---

## Technical Context

### Technology Stack
- **Framework**: React 19 with TypeScript
- **UI Library**: Material-UI (MUI) v7.1.2
- **Styling**: Emotion CSS-in-JS with MUI `sx` prop
- **Icons**: @mui/icons-material (Material Icons)
- **Build Tool**: Vite

### Current State Analysis

#### SecretReadOnlyField Component (`src/components/SecretReadOnlyField.tsx`)
- Displays mnemonic as a single-line `OutlinedInput`
- Shows placeholder text `*****` when hidden
- Has visibility toggle and copy buttons
- Issues:
  - No blur effect on hidden state
  - Single-line display truncates long mnemonic phrases
  - Basic styling, lacks visual polish

#### SettingsPage (`src/pages/SettingsPage.tsx`)
- Card-based layout with three sections
- Uses standard MUI components
- Good structure but could use visual enhancements

#### TodoPage (`src/pages/TodoPage.tsx`)
- Functional todo list with active/finished sections
- Uses basic List components
- Could benefit from better visual hierarchy

#### Theme System (`src/themes.ts`)
- Basic light/dark themes
- Uses standard MUI color palette
- No custom visual enhancements

---

## Implementation Approach

### 1. Mnemonic Blur & Multiline Enhancement

**Component to Modify**: `SecretReadOnlyField.tsx`

**Changes**:
- Add CSS blur filter when mnemonic is hidden
- Switch from `OutlinedInput` to a custom layout when multiline display is needed
- Display mnemonic as readable, formatted text when shown (word-wrapped, possibly with word groups)
- Add smooth transition animations between hidden/shown states

**Implementation Details**:
- Use MUI `Box` with `sx` prop for blur: `filter: showSecret ? 'none' : 'blur(8px)'`
- When shown, use `Typography` component with proper line height and spacing
- Split mnemonic into word groups (e.g., 4 words per line) for better readability
- Add `user-select: none` when blurred to prevent copying hidden content

### 2. Visual Improvements for SettingsPage

**Enhancements**:
- Add icons to section headers (Data, Owner, Danger Zone)
- Add icons to buttons for better visual recognition
- Improve card styling with subtle shadows and better spacing
- Add visual hierarchy with icons for key actions

**Icons to Add**:
- Data section: `StorageIcon`
- Owner section: `KeyIcon` or `PersonIcon`
- Danger Zone: `WarningIcon`
- Download button: `DownloadIcon`
- Create Shared Owner: `GroupAddIcon`
- Restore: `RestoreIcon`
- Delete: `DeleteForeverIcon`

### 3. Visual Improvements for TodoPage

**Enhancements**:
- Add icons to section headers
- Add visual feedback for todo completion status
- Improve empty state visuals
- Add icons to buttons

**Icons to Add**:
- Active todos header: `CheckBoxOutlineBlankIcon`
- Finished todos header: `CheckBoxIcon`
- Add todo button: `AddIcon`
- Empty state: `AssignmentIcon`

### 4. Theme Enhancements (Optional)

**Potential Updates** to `themes.ts`:
- Add custom shadows for cards
- Improve color contrast
- Add subtle gradients or background patterns

---

## Source Code Structure Changes

### Files to Modify

| File | Changes |
|------|---------|
| `src/components/SecretReadOnlyField.tsx` | Major rewrite: blur effect, multiline display, animations |
| `src/pages/SettingsPage.tsx` | Add icons, improve visual hierarchy |
| `src/pages/TodoPage.tsx` | Add icons, improve visual polish |
| `src/themes.ts` | Minor enhancements to theme definitions (optional) |

### Files to Create
None - all changes are modifications to existing files.

---

## Data Model / API / Interface Changes

### SecretReadOnlyField Props Update

```typescript
interface SecretFieldOptions {
    fieldName: string;
    loading: boolean;
    secretValue: string;
    canBeShowed?: boolean;
    showCopyButton?: boolean;
    // New optional props
    multiline?: boolean;        // Enable multiline display when shown
    blurIntensity?: number;     // Customizable blur strength (default: 8)
    wordsPerLine?: number;      // Words per line in multiline mode (default: 4)
}
```

No database schema changes required. No API changes required.

---

## Verification Approach

### Manual Testing Checklist
1. **Mnemonic Blur**:
   - [ ] Verify blur effect appears when mnemonic is hidden
   - [ ] Verify blur transitions smoothly when toggling visibility
   - [ ] Verify blurred text is not selectable
   - [ ] Verify multiline display shows all words when shown
   - [ ] Test on both light and dark themes

2. **Icons**:
   - [ ] All new icons render correctly
   - [ ] Icons are properly aligned with text
   - [ ] Icons work in both light and dark themes

3. **General Visual**:
   - [ ] Layouts remain responsive
   - [ ] No visual regressions in existing functionality
   - [ ] Smooth transitions and animations
   - [ ] Accessibility: sufficient color contrast

### Commands to Run
```bash
# Type checking
npm run type-check

# Linting
npm run lint

# Build verification
npm run build

# Development testing
npm run dev
```

### Browser Testing
- Test in Chrome, Firefox, Edge
- Test responsive behavior at various screen widths
- Test both light and dark modes

---

## Implementation Notes

### Blur Effect Implementation
```tsx
// Example blur styling approach
<Box
  sx={{
    filter: showSecret ? 'none' : 'blur(8px)',
    transition: 'filter 0.3s ease-in-out',
    userSelect: showSecret ? 'text' : 'none',
  }}
>
  {/* Content */}
</Box>
```

### Multiline Mnemonic Display
```tsx
// Format mnemonic into word groups
const formatMnemonic = (mnemonic: string, wordsPerLine: number = 4): string[] => {
  const words = mnemonic.split(' ');
  const lines: string[] = [];
  for (let i = 0; i < words.length; i += wordsPerLine) {
    lines.push(words.slice(i, i + wordsPerLine).join(' '));
  }
  return lines;
};
```

### Icon Integration Pattern
```tsx
// Consistent icon usage pattern
import StorageIcon from '@mui/icons-material/Storage';

<Stack direction="row" alignItems="center" spacing={1}>
  <StorageIcon color="primary" />
  <Typography variant="h6">{t("settings.sections.data")}</Typography>
</Stack>
```

---

## Estimated Complexity

| Task | Complexity | Risk |
|------|------------|------|
| Mnemonic blur effect | Low | Low - CSS filter is well supported |
| Multiline mnemonic display | Medium | Low - straightforward layout change |
| SettingsPage icons | Low | Low - standard icon integration |
| TodoPage icons | Low | Low - standard icon integration |
| Theme enhancements | Low | Low - optional polish |

**Overall Risk**: Low - All changes are visual/styling only with no business logic modifications.
