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

const SettingsId = Evolu.id("SettingsId");
export type SettingsId = typeof SettingsId.Type;

const Settings = {
    id: SettingsId,
    language: Evolu.NonEmptyString100,
    theme: Evolu.NonEmptyString100,
}

export const Schema = {
    todo: Todo,
    settings: Settings
};