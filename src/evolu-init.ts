import { createEvolu, getOrThrow, SimpleName } from "@evolu/common";
import { evoluReactWebDeps } from "@evolu/react-web";
import { Schema } from "./evolu-db";

export const evolu = createEvolu(evoluReactWebDeps)(Schema, {
    reloadUrl: "/",
    name: getOrThrow(SimpleName.from("db-todo-app")),

    ...(process.env.NODE_ENV === "development" && {
        syncUrl: "http://localhost:4000",
    }),

    indexes: (create) => [
    ],

    // enableLogging: true,
});