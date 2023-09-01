import { StateSchema } from "app/providers/StoreProvider";

export const getRecipientId = (state: StateSchema) => state.chat.recipientId;
