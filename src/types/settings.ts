/**
 * Settings-related types
 */

import { SettingsId } from '../evolu/evolu-db';
import { Language, ThemeMode } from './common';

/**
 * Settings representation for UI display
 */
export interface Settings {
    id: SettingsId;
    language: Language;
    theme: ThemeMode;
}

/**
 * Data for creating initial settings
 */
export interface SettingsCreateInput {
    language: Language;
    theme: ThemeMode;
}

/**
 * Data for updating settings
 */
export interface SettingsUpdateInput {
    language?: Language;
    theme?: ThemeMode;
}

/**
 * Re-export SettingsId from evolu-db for convenience
 */
export type { SettingsId };
