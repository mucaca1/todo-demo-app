import { createRoot } from "react-dom/client";
import './i18n/i18n';
import { ThemeContext, ThemeProvider } from "./context/ThemeContext";
import { memo, useContext } from "react";
import React from "react";
import { EvoluProvider, useQuery } from "@evolu/react";
import { evolu } from "./evolu-init";
import { RootPage } from "./pages/RootPage";
import { settings, TSettingsRow } from "./evolu-db/evolu-query";
import { QueryRows } from "@evolu/common";
import { WelcomePage } from "./pages/WelcomePage";
import { useTranslation } from "react-i18next";
import { Language } from "./components/LanguageSelector";
import { ThemeMode } from "./themes";

const root = createRoot(document.body);

const Init = () => {
    const result: QueryRows<TSettingsRow> = useQuery(settings);
    const { setTheme, storeTheme } = useContext(ThemeContext);
    const { i18n } = useTranslation();
    if (result.length > 0) {
        i18n.changeLanguage(result[0].language as Language);
        setTheme(result[0].theme as ThemeMode);
        storeTheme(result[0].theme as ThemeMode)
    }
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