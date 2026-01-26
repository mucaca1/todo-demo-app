import { createRoot } from "react-dom/client";
import './i18n/i18n';
import { ThemeProvider } from "./context/ThemeContext";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import React from "react";

const root = createRoot(document.body);

const ToDoApp = memo(function ToDoApp() {
    const { t, } = useTranslation();
    return (
        <div>
            <React.StrictMode>
                <ThemeProvider>
                    <h1>{t('hello')}</h1>
                </ThemeProvider>
            </React.StrictMode>
        </div>
    );
});

root.render(<ToDoApp/>
);