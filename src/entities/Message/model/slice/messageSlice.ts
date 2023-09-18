import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MessagesWithUser } from "entities/Chat";

export const messageSlice = createSlice({
  name: "messageSlice",
  initialState: {} as MessagesWithUser,
  reducers: {
    setMessage: (state, action: PayloadAction<MessagesWithUser>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { actions: messageActions } = messageSlice;
export const { reducer: messageReducer } = messageSlice;
