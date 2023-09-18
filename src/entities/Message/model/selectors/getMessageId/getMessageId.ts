import { StateSchema } from "app/providers/StoreProvider";

export const getMessageId = (state: StateSchema) => state.message.id;
