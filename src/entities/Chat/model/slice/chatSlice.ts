import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChatSchema, MessagesWithUser } from "../types/chatSchema";

export const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messagesWithUser: [],
  } as ChatSchema,
  reducers: {
    setMessagesWithUser: (state, action: PayloadAction<MessagesWithUser[]>) => {
      state.messagesWithUser = action.payload;
      return state;
    },
    updateMessagesWithUser: (
      state,
      action: PayloadAction<MessagesWithUser>
    ) => {
      state.messagesWithUser = [...state.messagesWithUser, action.payload];
      return state;
    },
  },
});
export const { actions: chatActions } = chatSlice;
export const { reducer: chatReducer } = chatSlice;
