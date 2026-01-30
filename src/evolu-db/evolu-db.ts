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

export const Schema = {
    todo: Todo
};