import { createRoot } from "react-dom/client";
import './i18n/i18n';
import { ThemeProvider } from "./context/ThemeContext";
import { useTranslation } from "react-i18next";
import { memo, Suspense } from "react";
import React from "react";
import { EvoluProvider } from "@evolu/react";
import { evolu } from "./evolu-init";
import { MenuBar } from "./components/MenuBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SettingsPage } from "./pages/SettingsPage";

const root = createRoot(document.body);

const ToDoApp = memo(function ToDoApp() {
    const { t, } = useTranslation();
    return (
        <div>
            <React.StrictMode>
                <EvoluProvider value={evolu}>
                    <ThemeProvider>
                        <BrowserRouter>
                            <MenuBar />
                            <Suspense >
                                <div style={{ maxWidth: "90%", padding: "2rem" }}>
                                    <Routes>
                                        <Route
                                            path="/"
                                            element={<h1>{t('home')}</h1>}
                                        />
                                        <Route
                                            path="/settings"
                                            element={<SettingsPage />}
                                        />
                                    </Routes>
                                </div>
                            </Suspense>
                        </BrowserRouter>
                    </ThemeProvider>
                </EvoluProvider>
            </React.StrictMode>
        </div>
    );
});

root.render(<ToDoApp/>
);