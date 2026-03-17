import * as Evolu from "@evolu/common";
import { evolu } from "../evolu-init";
import { TodoId } from "./evolu-db";

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

export const allTags: Evolu.Query = evolu.createQuery((db) =>
    db
        .selectFrom("tag")
        .selectAll()
        .where("isDeleted", "is not", Evolu.sqliteTrue)
        .orderBy("name")
);
export type TAllTagsRow = typeof allTags.Row;

export const todoTags = (todoId: TodoId): Evolu.Query =>
    evolu.createQuery((db) =>
        db
            .selectFrom("todoTag")
            .innerJoin("tag", "tag.id", "todoTag.tagId")
            .select(["tag.id", "tag.name", "tag.color"])
            .where("todoTag.todoId", "=", todoId)
            .where("todoTag.isDeleted", "is not", Evolu.sqliteTrue)
            .where("tag.isDeleted", "is not", Evolu.sqliteTrue)
    );
export type TTodoTagsRow = ReturnType<typeof todoTags> extends Evolu.Query
    ? ReturnType<typeof todoTags>["Row"]
    : never;