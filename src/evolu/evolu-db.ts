import * as Evolu from "@evolu/common";
import { evoluReactWebDeps } from "@evolu/react-web";

const TodoId = Evolu.id("Todo");
export type TodoId = typeof TodoId.Type;

const Todo = {
    id: TodoId,
    title: Evolu.NonEmptyString100,
    description: Evolu.nullOr(Evolu.String1000),
    isCompleted: Evolu.nullOr(Evolu.SqliteBoolean),
    completeAt: Evolu.nullOr(Evolu.DateIso)
}

const TagId = Evolu.id("Tag");
export type TagId = typeof TagId.Type;

const Tag = {
    id: TagId,
    name: Evolu.NonEmptyString100,
    color: Evolu.NonEmptyString100,
}

const TodoTagId = Evolu.id("TodoTag");
export type TodoTagId = typeof TodoTagId.Type;

const TodoTag = {
    id: TodoTagId,
    todoId: TodoId,
    tagId: TagId,
}

const SettingsId = Evolu.id("SettingsId");
export type SettingsId = typeof SettingsId.Type;

const Settings = {
    id: SettingsId,
    language: Evolu.NonEmptyString100,
    theme: Evolu.NonEmptyString100,
}

export const Schema = {
    todo: Todo,
    tag: Tag,
    todoTag: TodoTag,
    settings: Settings
};