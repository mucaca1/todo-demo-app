import { Box, Card, CardContent, Divider, FormControl, Grid, InputLabel, MenuItem, OutlinedInput, Paper, Select, Stack, Typography } from "@mui/material";
import { Language, LanguageSelector } from "../LanguageSelector";
import { SettingsId } from "../../evolu-db/evolu-db";
import { themeLabels } from "../../themes";
import { useEvolu } from "../../evolu-init";
import {
    Palette as PaletteIcon,
    Lock as LockIcon,
    Settings as SettingsIcon,
    Storage as StorageIcon,
    Key as KeyIcon,
    Warning as WarningIcon,
    Download as DownloadIcon,
    GroupAdd as GroupAddIcon,
    Restore as RestoreIcon,
    DeleteForever as DeleteForeverIcon,
} from "@mui/icons-material";
import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { useTranslation } from "react-i18next";
import { QueryRows } from "@evolu/common";
import { SettingRow } from "../FieldRow";


// =============================================================================
// Section Component
// =============================================================================

interface SettingSectionProps {
    title: string;
    icon: React.ReactElement;
    children: React.ReactNode;
}

const SettingSection: React.FC<SettingSectionProps> = ({
    title,
    icon,
    children,
}) => (
    <Paper sx={{ p: 3, mb: 3 }} elevation={0} variant="outlined">
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2.5 }}>
            {icon}
            <Typography variant="h6">{title}</Typography>
        </Box>
        {children}
    </Paper>
);

export type ISettingsArgs = {
    settingRows: QueryRows
}

export function GeneralSettings({settingRows} : ISettingsArgs) {
    const evolu = useEvolu();
    const { mode, setTheme, storeTheme } = useContext(ThemeContext);
    const { t, i18n } = useTranslation();

        const languages: Record<Language, string> = {
            en: t("language.english"),
            sk: t("language.slovak"),
        };
    
    return (<div>
        <SettingSection
            title={t("settings.appearance")}
            icon={<PaletteIcon color="primary" />}
        >
            <Grid container spacing={3}>
                {/* Language */}
                <Grid size={{ xs: 12, sm: 6 }}>
                    <FormControl fullWidth>
                        <InputLabel>{t("settings.language")}</InputLabel>
                        <Select
                            value={i18n.language as Language}
                            onChange={(e) => {
                                evolu.update("settings", { id: settingRows[0].id as SettingsId, language: e.target.value as any });
                            }}
                            label={t("settings.language")}
                        >
                            {Object.entries(languages).map(([key, label]) => (
                                <MenuItem key={key} value={key}>
                                    {label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>

                {/* Theme Mode */}
                <Grid size={{ xs: 12, sm: 6 }}>
                    <FormControl fullWidth>
                        <InputLabel>{t("settings.theme")}</InputLabel>
                        <Select
                            value={mode}
                            onChange={(e) => {
                                evolu.update("settings", { id: settingRows[0].id as SettingsId, theme: e.target.value });
                            }}
                            label={t("settings.theme")}
                        >
                            {Object.entries(themeLabels).map(([key, label]) => (
                                <MenuItem key={key} value={key}>
                                    {label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </SettingSection>
    </div>);
}