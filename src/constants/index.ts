/**
 * Application-wide constants
 */

import { Language, ThemeMode } from '../types';

// =============================================================================
// App Metadata
// =============================================================================

export const APP_NAME = 'Todo Demo App';

// =============================================================================
// Storage Keys
// =============================================================================

export const STORAGE_KEYS = {
    /** Key for storing the selected language in localStorage */
    LANGUAGE: 'i18nextLng',
    /** Key for storing the theme mode in localStorage */
    THEME: 'themeMode',
} as const;

// =============================================================================
// Language Configuration
// =============================================================================

/** Default language when no preference is set */
export const DEFAULT_LANGUAGE: Language = 'en';

/** Supported languages in the application */
export const SUPPORTED_LANGUAGES: Language[] = ['en', 'sk'];

// =============================================================================
// Theme Configuration
// =============================================================================

/** Default theme mode when no preference is set */
export const DEFAULT_THEME_MODE: ThemeMode = 'light';

/** Supported theme modes */
export const SUPPORTED_THEME_MODES: ThemeMode[] = ['light', 'dark'];

// =============================================================================
// i18n Configuration
// =============================================================================

/** Fallback language when translation is missing */
export const I18N_FALLBACK_LANGUAGE: Language = 'sk';

// =============================================================================
// UI Constants
// =============================================================================

/** Maximum number of finished todos to show before "Show All" button appears */
export const MAX_VISIBLE_FINISHED_TODOS = 3;

/** Animation timeout for todo list item collapse (in ms) */
export const TODO_COLLAPSE_TIMEOUT = 300;

// =============================================================================
// Database Table Names
// =============================================================================

export const TABLE_NAMES = {
    TODO: 'todo',
    SETTINGS: 'settings',
} as const;
