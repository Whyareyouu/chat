import { StateSchema } from "app/providers/StoreProvider";

export const getMessage = (state: StateSchema) => state.message;
