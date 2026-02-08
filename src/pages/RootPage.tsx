import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MenuBar } from "../components/MenuBar";
import { Suspense } from "react";
import TodoPage from "./TodoPage";
import { SettingsPage } from "./SettingsPage";
import { QueryRows } from "@evolu/common";
import { MemoryRouter } from 'react-router-dom';

export function RootPage({rows}: {rows: QueryRows[]}) {
    return (
        <MemoryRouter initialEntries={['/']} initialIndex={0}>
            <MenuBar />
            <Suspense >
                <div style={{ maxWidth: "90%", padding: "2rem" }}>
                    <Routes>
                        <Route
                            path="/"
                            element={<TodoPage todoRows={rows[0]} />}
                        />
                        <Route
                            path="/settings"
                            element={<SettingsPage settingRows={rows[1]} />}
                        />
                    </Routes>
                </div>
            </Suspense>
        </MemoryRouter>
    );
}