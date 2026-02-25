/**
 * Settings Service - Abstraction layer for Evolu database settings operations
 */

import { useEvolu } from "../evolu-init";
import { SettingsId } from "../types/settings";
import { Language, ThemeMode } from "../types/common";
import { Result } from "@evolu/common";

/**
 * Return type for settings service operations
 */
type ServiceResult<T = void> = Result<T, Error>;

/**
 * Custom hook providing settings CRUD operations
 */
export function useSettingsService() {
    const { insert, update } = useEvolu();

    /**
     * Create initial settings
     */
    const createSettings = (language: Language, theme: ThemeMode): ServiceResult => {
        const result = insert("settings", {
            language,
            theme,
        });

        if (!result.ok) {
            console.error("Failed to create settings:", result.error.value);
        }

        return result;
    };

    /**
     * Update language setting
     */
    const updateLanguage = (id: SettingsId, language: Language): ServiceResult => {
        const result = update("settings", {
            id,
            language,
        });

        if (!result.ok) {
            console.error("Failed to update language:", result.error.value);
        }

        return result;
    };

    /**
     * Update theme setting
     */
    const updateTheme = (id: SettingsId, theme: ThemeMode): ServiceResult => {
        const result = update("settings", {
            id,
            theme,
        });

        if (!result.ok) {
            console.error("Failed to update theme:", result.error.value);
        }

        return result;
    };

    /**
     * Update all settings at once
     */
    const updateSettings = (
        id: SettingsId,
        settings: { language?: Language; theme?: ThemeMode }
    ): ServiceResult => {
        const result = update("settings", {
            id,
            ...settings,
        });

        if (!result.ok) {
            console.error("Failed to update settings:", result.error.value);
        }

        return result;
    };

    return {
        createSettings,
        updateLanguage,
        updateTheme,
        updateSettings,
    };
}
