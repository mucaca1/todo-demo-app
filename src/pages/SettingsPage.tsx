import React, { useState } from "react";
import {
    Box,
    Typography,
    Card,
    CardContent,
    Divider,
    Button,
    Stack,
    InputLabel,
    OutlinedInput,
    InputAdornment,
    IconButton,
} from "@mui/material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useEvolu } from "@evolu/react";
import { useTranslation } from "react-i18next";
import { SecretReadOnlyField } from "../components/SecretReadOnlyField";
import { AppOwner } from "@evolu/common";
import { MnemonicField } from "../components/MnemonicField";

export function SettingsPage() {
    const { t, i18n } = useTranslation();
    const evolu = useEvolu();
    const owner: Promise<AppOwner> = evolu.appOwner;
    const [showMnemonic, setShowMnemonic] = useState<boolean>(false);

    const handleFileImport = (
        handler: (file: File) => Promise<void>
    ) => async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;
        await handler(file);
        event.target.value = "";
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
                        <Button
                            variant="outlined"
                            onClick={() => evolu.exportDatabase()}
                        >
                            Export Database
                        </Button>

                        <Button variant="outlined" component="label">
                            Import Database
                            <input
                                hidden
                                type="file"
                                accept=".json"
                                onChange={handleFileImport(evolu.importDatabase)}
                            />
                        </Button>
                    </Stack>
                </CardContent>
            </Card>

            {/* Owner */}
            <Card sx={{ mb: 3 }}>
                <CardContent>
                    <Typography variant="h6">Owner</Typography>
                    <Divider sx={{ my: 2 }} />

                    <Stack spacing={2}>
                        <MnemonicField owner={owner}/>

                        <Button variant="outlined" component="label">
                            Import Owner
                            <input
                                hidden
                                type="file"
                                accept=".json"
                                onChange={handleFileImport(evolu.importOwner)}
                            />
                        </Button>

                        <Typography variant="body2" color="text.secondary">
                            Importing an owner replaces the current identity and secret.
                        </Typography>
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
                        This permanently deletes the owner and all local data.
                        This action cannot be undone.
                    </Typography>

                    <Button
                        variant="contained"
                        color="error"
                        onClick={() => {
                            if (
                                window.confirm(
                                    "This will delete the owner and ALL data. Continue?"
                                )
                            ) {
                                evolu.resetAppOwner();
                            }
                        }}
                    >
                        Delete Account
                    </Button>
                </CardContent>
            </Card>
        </Box>
    );
}
