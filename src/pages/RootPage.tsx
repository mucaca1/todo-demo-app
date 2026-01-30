import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MenuBar } from "../components/MenuBar";
import { Suspense } from "react";
import TodoPage from "./TodoPage";
import { SettingsPage } from "./SettingsPage";
import { useQueries } from "@evolu/react";
import { activeTodos, settings } from "../evolu-db/evolu-query";
import { QueryRows } from "@evolu/common";

export function RootPage() {
    const resultQueries: QueryRows[] = useQueries([activeTodos, settings]);
    console.log(resultQueries);
    return (
        <BrowserRouter>
            <MenuBar />
            <Suspense >
                <div style={{ maxWidth: "90%", padding: "2rem" }}>
                    <Routes>
                        <Route
                            path="/"
                            element={<TodoPage todoRows={resultQueries[0]} />}
                        />
                        <Route
                            path="/settings"
                            element={<SettingsPage settingRows={resultQueries[1]} />}
                        />
                    </Routes>
                </div>
            </Suspense>
        </BrowserRouter>
    );
}