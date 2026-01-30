import { createTheme } from '@mui/material/styles';

export type ThemeMode = 'light' | 'dark';

export const themeLabels: Record<ThemeMode, string> = {
    light: "Light",
    dark: "Dark",
};

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#1976d2',
        },
        background: {
            default: '#f4f6f8',
        },
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#90caf9',
        },
        background: {
            default: '#121212',
        },
    },
});