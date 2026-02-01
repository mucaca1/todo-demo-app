import { createRoot } from "react-dom/client";
import './i18n/i18n';
import { ThemeContext, ThemeProvider } from "./context/ThemeContext";
import { memo, useContext } from "react";
import React from "react";
import { EvoluProvider, useQueries, useQuery } from "@evolu/react";
import { evolu } from "./evolu-init";
import { RootPage } from "./pages/RootPage";
import { activeTodos, settings, TSettingsRow } from "./evolu-db/evolu-query";
import { QueryRows } from "@evolu/common";
import { WelcomePage } from "./pages/WelcomePage";
import { useTranslation } from "react-i18next";
import { Language } from "./components/LanguageSelector";
import { ThemeMode } from "./themes";

const root = createRoot(document.body);

const Init = () => {
    const result: QueryRows[] = useQueries([activeTodos, settings]);
    const { mode, setTheme } = useContext(ThemeContext);
    const { i18n } = useTranslation();
    if (result.length > 1 && result[1].length > 0) {
        if (i18n.language !== result[1][0].language) {
            i18n.changeLanguage(result[1][0].language as Language);
        }
        if (mode !== result[1][0].theme) {
            setTheme(result[1][0].theme as ThemeMode);
        }
    }
    return (
        <div>
            {result.length > 1 && result[1].length === 0 && <WelcomePage />}
            {result.length > 1 && result[1].length > 0 && <RootPage rows={result} />}
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