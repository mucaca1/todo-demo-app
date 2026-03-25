import React, { useMemo } from "react";
import { Tooltip, IconButton, useTheme } from "@mui/material";
import { CloudOff, CloudDone } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { useEvoluError } from "@evolu/react";
import { EvoluError } from "@evolu/common";

/**
 * DatabaseConnectionStatus displays the current database connection state
 * with appropriate icons and tooltips.
 *
 * States:
 * - Local-only: No sync URL configured (blue CloudOff)
 * - Synced: Sync configured and no errors (green CloudDone)
 * - Error: Sync error occurred (red CloudOff)
 */
export function DatabaseConnectionStatus(): React.JSX.Element {
    const { t } = useTranslation();
    const theme = useTheme();
    const evoluError = useEvoluError();

    // Check if sync is configured
    const isSyncConfigured = useMemo(() => {
        try {
            return localStorage.getItem("evolu_sync_url") !== null;
        } catch {
            return false;
        }
    }, []);

    // Determine which icon to show based on state
    const getStatusIcon = (err : EvoluError | null): React.ReactNode => {
        // If sync is not configured, show local-only state
        if (!isSyncConfigured) {
            return (
                <CloudOff
                    sx={{
                        color: theme.palette.secondary.main,
                    }}
                />
            );
        }

        // Sync is configured
        // If there's an error, show error state
        if (err) {
            return (
                <CloudOff
                    sx={{
                        color: theme.palette.error.main,
                    }}
                />
            );
        }

        // Sync is configured and no errors - show synced state
        return (
            <CloudDone
                sx={{
                    color: theme.palette.success.main,
                }}
            />
        );
    };

    // Determine tooltip message based on state
    const getTooltipMessage = (): string => {
        // If sync is not configured, show local-only message
        if (!isSyncConfigured) {
            return t("database.status.local");
        }

        // Sync is configured
        // If there's an error, show error message
        if (evoluError) {
            return t("database.status.error");
        }

        // Sync is configured and no errors - show synced message
        return t("database.status.synced");
    };

    return (
        <Tooltip title={getTooltipMessage()}>
            <IconButton
                size="small"
                sx={{ ml: 1 }}
                aria-label={getTooltipMessage()}
                disabled
            >
                {getStatusIcon(evoluError)}
            </IconButton>
        </Tooltip>
    );
}
