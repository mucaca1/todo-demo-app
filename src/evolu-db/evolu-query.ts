import * as Evolu from "@evolu/common";
import { evolu } from "../evolu-init";

export const activeTodos: Evolu.Query = evolu.createQuery((db) => 
    db
    .selectFrom("todo")
    .selectAll()
    .where("isDeleted", "is not", Evolu.sqliteTrue)
    .orderBy("completeAt")
);
export type TActiveTodosRow = typeof activeTodos.Row;

export const settings: Evolu.Query = evolu.createQuery((db) =>
    db.selectFrom("settings").select(["id", "language", "theme"])
);

export type TSettingsRow = typeof settings.Row;