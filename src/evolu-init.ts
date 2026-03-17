import { createEvolu, getOrThrow, SimpleName } from "@evolu/common";
import { evoluReactWebDeps } from "@evolu/react-web";
import { Schema } from "./evolu/evolu-db";
import { createUseEvolu } from "@evolu/react";

// localStorage key for sync URL
const SYNC_URL_STORAGE_KEY = "evolu_sync_url";

/**
 * Get sync URL from localStorage
 */
function getStoredSyncUrl(): string | null {
    try {
        return localStorage.getItem(SYNC_URL_STORAGE_KEY);
    } catch {
        return null;
    }
}

export const evolu = createEvolu(evoluReactWebDeps)(Schema, {
    reloadUrl: "/",
    name: getOrThrow(SimpleName.from("db-todo-app")),

    ...((process.env.NODE_ENV === "development" || getStoredSyncUrl() !== null) && {
        transports: [
            {
                type: "WebSocket",
                url: getStoredSyncUrl() || "http://localhost:4000"
            }
        ]
    }),

    indexes: (create) => [
    ],

    enableLogging: true,
});

export const useEvolu = createUseEvolu(evolu);

/**
 * Subscribe to unexpected Evolu errors (database, network, sync issues). These
 * should not happen in normal operation, so always log them for debugging. Show
 * users a friendly error message instead of technical details.
 */
evolu.subscribeError(() => {
    const error = evolu.getError();
    if (!error) return;

    alert("🚨 Evolu error occurred! Check the console.");
    // eslint-disable-next-line no-console
    console.error(error);
});