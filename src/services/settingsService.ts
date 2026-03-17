/**
 * Settings Service - Abstraction layer for Evolu database settings operations
 */

import { useEvolu } from "../evolu-init";
import { SettingsId } from "../types/settings";
import { Language, ThemeMode } from "../types/common";
import { Result, NonEmptyString100 } from "@evolu/common";

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
    const createSettings = (language: Language, theme: ThemeMode, syncUrl?: string | null): ServiceResult => {
        const result = insert("settings", {
            language,
            theme,
            syncUrl: syncUrl ? NonEmptyString100.from(syncUrl) : null,
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
     * Update sync URL setting
     */
    const updateSyncUrl = (id: SettingsId, syncUrl: string | null): ServiceResult => {
        const result = update("settings", {
            id,
            syncUrl: syncUrl ? NonEmptyString100.from(syncUrl) : null,
        });

        if (!result.ok) {
            console.error("Failed to update sync URL:", result.error.value);
        }

        return result;
    };

    /**
     * Update all settings at once
     */
    const updateSettings = (
        id: SettingsId,
        settings: { language?: Language; theme?: ThemeMode; syncUrl?: string | null }
    ): ServiceResult => {
        const result = update("settings", {
            id,
            ...settings,
            syncUrl: settings.syncUrl ? NonEmptyString100.from(settings.syncUrl) : null,
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
        updateSyncUrl,
        updateSettings,
    };
}
