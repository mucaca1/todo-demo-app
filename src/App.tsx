import { createRoot } from "react-dom/client";
import './i18n/i18n';
import { ThemeProvider } from "./context/ThemeContext";
import { memo } from "react";
import React from "react";
import { EvoluProvider, useQuery } from "@evolu/react";
import { evolu } from "./evolu-init";
import { RootPage } from "./pages/RootPage";
import { settings, TSettingsRow } from "./evolu-db/evolu-query";
import { QueryRows } from "@evolu/common";
import { WelcomePage } from "./pages/WelcomePage";

const root = createRoot(document.body);

const Init = () => {
    const result: QueryRows<TSettingsRow> = useQuery(settings);
    return (
        <div>
            {result.length == 0 && <WelcomePage />}
            {result.length != 0 && <RootPage />}
        </div>
    )
}

const ToDoApp = memo(function ToDoApp() {
    return (
        <div>
            <React.StrictMode>
                <EvoluProvider value={evolu}>
                    <ThemeProvider>
                        <Init />
                    </ThemeProvider>
                </EvoluProvider>
            </React.StrictMode>
        </div>
    );
});

root.render(<ToDoApp/>
);