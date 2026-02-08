import React, { useEffect, useState } from 'react';
import { Snackbar, Alert, Button, LinearProgress, Typography } from '@mui/material';

declare global {
    interface Window {
        electron?: {
            onUpdateAvailable: (callback: (info: any) => void) => void;
            onDownloadProgress: (callback: (progress: any) => void) => void;
            onUpdateDownloaded: (callback: (info: any) => void) => void;
            installUpdate: () => void;
        };
    }
}

export const UpdateNotification: React.FC = () => {
    const [updateAvailable, setUpdateAvailable] = useState(false);
    const [updateDownloaded, setUpdateDownloaded] = useState(false);
    const [downloadProgress, setDownloadProgress] = useState(0);
    const [updateInfo, setUpdateInfo] = useState<any>(null);

    useEffect(() => {
        if (!window.electron) return;

        window.electron.onUpdateAvailable((info) => {
            setUpdateAvailable(true);
            setUpdateInfo(info);
        });

        window.electron.onDownloadProgress((progress) => {
            setDownloadProgress(progress.percent);
        });

        window.electron.onUpdateDownloaded((info) => {
            setUpdateAvailable(false);
            setUpdateDownloaded(true);
            setUpdateInfo(info);
        });
    }, []);

    const handleInstall = () => {
        window.electron?.installUpdate();
    };

    return (
        <>
            <Snackbar
                open={updateAvailable}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert severity="info" sx={{ width: '100%' }}>
                    <Typography variant="body2">
                        New version {updateInfo?.version} is downloading...
                    </Typography>
                    <LinearProgress
                        variant="determinate"
                        value={downloadProgress}
                        sx={{ mt: 1 }}
                    />
                </Alert>
            </Snackbar>

            <Snackbar
                open={updateDownloaded}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert
                    severity="success"
                    action={
                        <Button color="inherit" size="small" onClick={handleInstall}>
                            RESTART
                        </Button>
                    }
                >
                    Update downloaded! Click to restart and install.
                </Alert>
            </Snackbar>
        </>
    );
};