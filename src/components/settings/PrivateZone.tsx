import { Button, Card, CardContent, Divider, Stack, Typography } from "@mui/material";
import { useEvolu } from "../../evolu-init";
import { AppOwner, createOwnerSecret, createRandomBytes, createSharedOwner, Mnemonic } from "@evolu/common";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import {
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
import { SecretReadOnlyField } from "../SecretReadOnlyField";

export function PrivateZone() {

const { t } = useTranslation();
        const evolu = useEvolu();
    const owner: Promise<AppOwner> = evolu.appOwner;
    const [mnemonic, setMnemonic] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(true);

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

    return (<div>
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
    </div>);
}