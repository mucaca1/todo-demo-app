import { createRoot } from "react-dom/client";
import './i18n/i18n';
import { ThemeProvider } from "./context/ThemeContext";
import { memo } from "react";
import React from "react";
import { EvoluProvider } from "@evolu/react";
import { evolu } from "./evolu-init";
import { RootPage } from "./pages/RootPage";
import { WelcomePage } from "./pages/WelcomePage";
import { UpdateNotification } from "./components/updates";
import { useSettingsSync, useAppQueries } from "./hooks/useSettingsSync";

const root = createRoot(document.body);

const Init = () => {
    // Sync Evolu settings with i18n and theme contexts
    const { isInitialized } = useSettingsSync();
    const result = useAppQueries();

    return (
        <div>
            {!isInitialized && <WelcomePage />}
            {isInitialized && <RootPage rows={result} />}
        </div>
    )
}

const ToDoApp = memo(function ToDoApp() {
    return (
        <div>
            <React.StrictMode>
                <EvoluProvider value={evolu}>
                    <ThemeProvider>
                        <UpdateNotification />
                        <Init />
                    </ThemeProvider>
                </EvoluProvider>
            </React.StrictMode>
        </div>
    );
});

root.render(<ToDoApp/>
);