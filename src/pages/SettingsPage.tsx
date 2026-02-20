import { useContext, useEffect, useState } from "react";
import {
    Box,
    Typography,
    Card,
    CardContent,
    Divider,
    Button,
    Stack,
    OutlinedInput,
    Select,
    MenuItem,
} from "@mui/material";
import {
    Storage as StorageIcon,
    Key as KeyIcon,
    Warning as WarningIcon,
    Download as DownloadIcon,
    GroupAdd as GroupAddIcon,
    Restore as RestoreIcon,
    DeleteForever as DeleteForeverIcon,
} from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { SecretReadOnlyField } from "../components/SecretReadOnlyField";
import { AppOwner, Mnemonic, QueryRows, createSharedOwner, createOwnerSecret, createRandomBytes } from "@evolu/common";
import { SettingRow } from "../components/FieldRow";
import { Language, LanguageSelector } from "../components/LanguageSelector";
import { ThemeContext } from "../context/ThemeContext";
import { useThemeLabels } from "../hooks/useThemeLabels";
import { useEvolu } from "../evolu-init";

export type ISettingsArgs = {
    settingRows: QueryRows
}

export function SettingsPage({ settingRows }: ISettingsArgs) {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [mnemonic, setMnemonic] = useState<string>("");
    const { mode, setTheme, storeTheme } = useContext(ThemeContext);
    const { t, i18n } = useTranslation();
    const evolu = useEvolu();
    const owner: Promise<AppOwner> = evolu.appOwner;
    const themeLabels = useThemeLabels();

    useEffect(() => {
        owner.then((appOwner: AppOwner) => {
            if (appOwner.mnemonic) {
                setMnemonic(appOwner.mnemonic.toString());
                setIsLoading(false);
            }
        });
    }, []);


    // Restore owner from mnemonic to sync data across devices.
    const handleRestoreAppOwnerClick = () => {
        const mnemonic = window.prompt(t("settings.mnemonic.restorePrompt"));
        if (mnemonic == null) return;

        const result = Mnemonic.from(mnemonic.trim());
        if (!result.ok) {
            return;
        }

        void evolu.restoreAppOwner(result.value);
    };

    const handleResetAppOwnerClick = () => {
        if (confirm("Are you sure? This will delete all your local data.")) {
            void evolu.resetAppOwner();
        }
    };


    const handleDownloadDatabaseClick = () => {
        void evolu.exportDatabase().then((array) => {
            const blob = new Blob([array], {
                type: "application/x-sqlite3",
            });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "todos.sqlite3";
            a.click();
            window.URL.revokeObjectURL(url);
        });
    };

    const handleCreateSharedOwnerClick = () => {
        // Create a new random owner secret using Evolu's crypto utilities
        const secret = createOwnerSecret({ randomBytes: createRandomBytes() });

        // Create the shared owner with the secret
        const sharedOwner = createSharedOwner(secret);

        // Get the mnemonic for sharing
        const sharedMnemonic = sharedOwner.id.toString();

        // Display the mnemonic to the user for sharing
        window.prompt(
            t("settings.mnemonic.shareInstruction"),
            sharedMnemonic
        );
    };

    return (
        <Box sx={{ maxWidth: 720, mx: "auto", p: 3 }}>
            <Typography variant="h4" gutterBottom>
                {t("settings.title")}
            </Typography>

            {/* Data */}
            <Card sx={{ mb: 3 }}>
                <CardContent>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
                        <StorageIcon color="primary" />
                        <Typography variant="h6">{t("settings.sections.data")}</Typography>
                    </Stack>
                    <Divider sx={{ my: 2 }} />

                    <Stack spacing={2}>
                        <SettingRow label={t("settings.language")}>
                            <LanguageSelector value={i18n.language as Language} onChange={(e) => {
                                i18n.changeLanguage(e);
                            }} />
                        </SettingRow>

                        <Select
                            value={mode}
                            onChange={(e) => setTheme(e.target.value)}
                            input={<OutlinedInput />}
                            size="small"
                            sx={{ maxWidth: 220 }}
                            fullWidth
                        >
                            {Object.entries(themeLabels).map(([key, label]) => (
                                <MenuItem key={key} value={key}>
                                    {label}
                                </MenuItem>
                            ))}
                        </Select>
                        
                    </Stack>
                </CardContent>
            </Card>

            {/* Owner */}
            <Card sx={{ mb: 3 }}>
                <CardContent>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
                        <KeyIcon color="primary" />
                        <Typography variant="h6">{t("settings.sections.owner")}</Typography>
                    </Stack>
                    <Divider sx={{ my: 2 }} />

                    <Stack spacing={2}>
                        <SecretReadOnlyField
                            fieldName={t("settings.mnemonic.label")}
                            loading={isLoading}
                            secretValue={mnemonic}
                        />

                        <Typography variant="body2" color="text.secondary">
                            {t("settings.importOwnerWarning")}
                        </Typography>

                        <Button
                            onClick={handleDownloadDatabaseClick}
                            variant="outlined"
                            startIcon={<DownloadIcon />}
                        >
                            {t("settings.downloadDatabase")}
                        </Button>

                        <Button
                            onClick={handleCreateSharedOwnerClick}
                            variant="outlined"
                            startIcon={<GroupAddIcon />}
                        >
                            {t("settings.createSharedOwner")}
                        </Button>
                    </Stack>
                </CardContent>
            </Card>

            {/* Danger Zone */}
            <Card sx={{ border: "1px solid", borderColor: "error.main" }}>
                <CardContent>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
                        <WarningIcon color="error" />
                        <Typography variant="h6" color="error">
                            {t("settings.sections.dangerZone")}
                        </Typography>
                    </Stack>

                    <Divider sx={{ my: 2 }} />
                    <Typography variant="body2" sx={{ mb: 2 }}>
                        {t("settings.restoreOwnerWarning")}
                    </Typography>
                    <Button
                        onClick={handleRestoreAppOwnerClick}
                        fullWidth
                        variant="outlined"
                        color="warning"
                        startIcon={<RestoreIcon />}
                    >
                        {t("settings.restoreAppOwner")}
                    </Button>
                    <Divider sx={{ my: 2 }} />

                    <Typography variant="body2" sx={{ mb: 2 }}>
                        {t("settings.deleteAccountWarning")}
                    </Typography>
                    <Button
                        fullWidth
                        variant="contained"
                        color="error"
                        onClick={handleResetAppOwnerClick}
                        startIcon={<DeleteForeverIcon />}
                    >
                        {t("settings.deleteAccount")}
                    </Button>
                </CardContent>
            </Card>
        </Box>
    );
}
