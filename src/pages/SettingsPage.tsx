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
import { useTranslation } from "react-i18next";
import { SecretReadOnlyField } from "../components/SecretReadOnlyField";
import { AppOwner, Mnemonic } from "@evolu/common";
import { SettingRow } from "../components/FieldRow";
import { Language, LanguageSelector } from "../components/LanguageSelector";
import { ThemeContext } from "../context/ThemeContext";
import { themeLabels } from "../themes";
import { useEvolu } from "../evolu-init";

export function SettingsPage() {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [mnemonic, setMnemonic] = useState<string>("");
    const { mode, setTheme, storeTheme } = useContext(ThemeContext);
    const { t, i18n } = useTranslation();
    const evolu = useEvolu();
    const owner: Promise<AppOwner> = evolu.appOwner;

    owner.then((appOwner: AppOwner) => {
        if (appOwner.mnemonic) {
            setMnemonic(appOwner.mnemonic.toString());
            setIsLoading(false);
        }
    });

    // Restore owner from mnemonic to sync data across devices.
    const handleRestoreAppOwnerClick = () => {
        const mnemonic = window.prompt("Enter your mnemonic to restore your data:");
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

    return (
        <Box sx={{ maxWidth: 720, mx: "auto", p: 3 }}>
            <Typography variant="h4" gutterBottom>
                Settings
            </Typography>

            {/* Data */}
            <Card sx={{ mb: 3 }}>
                <CardContent>
                    <Typography variant="h6">Data</Typography>
                    <Divider sx={{ my: 2 }} />

                    <Stack spacing={2}>
                        <SettingRow label="Language">
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
                    <Typography variant="h6">Owner</Typography>
                    <Divider sx={{ my: 2 }} />

                    <Stack spacing={2}>
                        <SecretReadOnlyField
                            fieldName="Mnemonic"
                            loading={isLoading}
                            secretValue={mnemonic}
                        />

                        <Typography variant="body2" color="text.secondary">
                            Importing an owner replaces the current identity and secret.
                        </Typography>

                        <Button onClick={handleDownloadDatabaseClick} variant="outlined">Download database</Button>
                    </Stack>
                </CardContent>
            </Card>

            {/* Danger Zone */}
            <Card sx={{ border: "1px solid", borderColor: "error.main" }}>
                <CardContent>
                    <Typography variant="h6" color="error">
                        Danger Zone
                    </Typography>

                    <Divider sx={{ my: 2 }} />
                    <Typography variant="body2" sx={{ mb: 2 }}>
                        This restore your local data for owner.
                    </Typography>
                    <Button onClick={handleRestoreAppOwnerClick} fullWidth variant="outlined">
                        Restore app owner
                    </Button>
                    <Divider sx={{ my: 2 }} />

                    <Typography variant="body2" sx={{ mb: 2 }}>
                        This permanently deletes the owner and all local data.
                        This action cannot be undone.
                    </Typography>
                    <Button
                        fullWidth
                        variant="contained"
                        color="error"
                        onClick={handleResetAppOwnerClick}
                    >
                        Delete Account
                    </Button>
                </CardContent>
            </Card>
        </Box>
    );
}
