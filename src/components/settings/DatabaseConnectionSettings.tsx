import { useState, useEffect } from "react";
import {
    Box,
    TextField,
    Button,
    Typography,
    Alert,
    CircularProgress,
    Grid,
} from "@mui/material";
import {
    Cloud as CloudIcon,
    CloudOff as CloudOffIcon,
    Link as LinkIcon,
} from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { QueryRows } from "@evolu/common";

// localStorage key for sync URL
const SYNC_URL_STORAGE_KEY = "evolu_sync_url";

/**
 * Get sync URL from localStorage
 */
function getStoredSyncUrl(): string | null {
    try {
        return localStorage.getItem(SYNC_URL_STORAGE_KEY);
    } catch {
        return null;
    }
}

/**
 * Save sync URL to localStorage
 */
function saveStoredSyncUrl(url: string | null): void {
    try {
        if (url) {
            localStorage.setItem(SYNC_URL_STORAGE_KEY, url);
        } else {
            localStorage.removeItem(SYNC_URL_STORAGE_KEY);
        }
    } catch (error) {
        console.error("Failed to save sync URL to localStorage:", error);
    }
}

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
    <Box
        sx={{
            p: 3,
            mb: 3,
            border: 1,
            borderColor: "divider",
            borderRadius: 1,
        }}
    >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2.5 }}>
            {icon}
            <Typography variant="h6">{title}</Typography>
        </Box>
        {children}
    </Box>
);

export type IDatabaseConnectionSettingsArgs = {
    settingRows: QueryRows;
};

export function DatabaseConnectionSettings({
    settingRows,
}: IDatabaseConnectionSettingsArgs) {
    const { t } = useTranslation();

    // Load sync URL from localStorage on mount
    const [syncUrl, setSyncUrl] = useState(() => getStoredSyncUrl() || "");
    const [currentSyncUrl, setCurrentSyncUrl] = useState<string | null>(() => getStoredSyncUrl());
    const [isSaving, setIsSaving] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    // Update state when localStorage changes (e.g., from another tab)
    useEffect(() => {
        const handleStorageChange = () => {
            const stored = getStoredSyncUrl();
            setCurrentSyncUrl(stored);
            setSyncUrl(stored || "");
        };

        window.addEventListener("storage", handleStorageChange);
        return () => window.removeEventListener("storage", handleStorageChange);
    }, []);

    const handleSave = () => {
        setIsSaving(true);
        setShowSuccess(false);

        const urlToSave = syncUrl.trim() || null;
        saveStoredSyncUrl(urlToSave);
        setCurrentSyncUrl(urlToSave);

        setIsSaving(false);
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
    };

    const handleClear = () => {
        setSyncUrl("");
        saveStoredSyncUrl(null);
        setCurrentSyncUrl(null);
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
    };

    return (
        <SettingSection
            title={t("settings.database.title")}
            icon={<CloudIcon color="primary" />}
        >
            <Grid container spacing={3}>
                {/* Connection URL Input */}
                <Grid size={{ xs: 12 }}>
                    <TextField
                        fullWidth
                        label={t("settings.database.syncUrl")}
                        value={syncUrl}
                        onChange={(e) => setSyncUrl(e.target.value)}
                        placeholder="https://free.evoluhq.com"
                        helperText={t("settings.database.syncUrlHelper")}
                        disabled={isSaving}
                        InputProps={{
                            startAdornment: <LinkIcon sx={{ mr: 1, color: "text.secondary" }} />,
                        }}
                    />
                </Grid>

                {/* Status Display */}
                <Grid size={{ xs: 12 }}>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            p: 2,
                            bgcolor: "background.default",
                            borderRadius: 1,
                        }}
                    >
                        {currentSyncUrl ? (
                            <>
                                <CloudIcon color="success" />
                                <Typography variant="body2" color="success.main">
                                    {t("settings.database.configured")}
                                </Typography>
                            </>
                        ) : (
                            <>
                                <CloudOffIcon color="warning" />
                                <Typography variant="body2" color="warning.main">
                                    {t("settings.database.notConfigured")}
                                </Typography>
                            </>
                        )}
                    </Box>
                </Grid>

                {/* Success Alert */}
                {showSuccess && (
                    <Grid size={{ xs: 12 }}>
                        <Alert severity="success">
                            {t("settings.database.saved")}
                        </Alert>
                    </Grid>
                )}

                {/* Action Buttons */}
                <Grid size={{ xs: 12 }}>
                    <Box sx={{ display: "flex", gap: 2 }}>
                        <Button
                            variant="contained"
                            onClick={handleSave}
                            disabled={isSaving}
                            startIcon={isSaving ? <CircularProgress size={20} /> : null}
                        >
                            {isSaving
                                ? t("common.saving")
                                : t("common.save")}
                        </Button>
                        {currentSyncUrl && (
                            <Button
                                variant="outlined"
                                color="warning"
                                onClick={handleClear}
                                disabled={isSaving}
                            >
                                {t("settings.database.clear")}
                            </Button>
                        )}
                    </Box>
                </Grid>
            </Grid>
        </SettingSection>
    );
}
