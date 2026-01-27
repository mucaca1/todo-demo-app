import * as Evolu from "@evolu/common";
import { evoluReactWebDeps } from "@evolu/react-web";

const TodoId = Evolu.id("Todo");
type TodoId = typeof TodoId.Type;

export const Schema = {
    todo: {
        id: TodoId,
        title: Evolu.NonEmptyString100,
        isCompleted: Evolu.nullOr(Evolu.SqliteBoolean),
    },
};