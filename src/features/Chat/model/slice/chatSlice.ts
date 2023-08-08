import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChatSchema } from "features/Chat/model/types/chatSchema";

export const chatSlice = createSlice({
  name: "chat",
  initialState: [] as ChatSchema[],
  reducers: {
    setMessages: (state, action: PayloadAction<ChatSchema[]>) => {
      state = action.payload;
      return state;
    },
  },
});
export const { actions: chatActions } = chatSlice;
export const { reducer: chatReducer } = chatSlice;
