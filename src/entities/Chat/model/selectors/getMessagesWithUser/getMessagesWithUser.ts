import { StateSchema } from "app/providers/StoreProvider";

export const getMessagesWithUser = (state: StateSchema) =>
  state.chat.messagesWithUser;
