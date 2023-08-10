import { createSlice } from "@reduxjs/toolkit";
import { AllUserChatsSchema } from "../types/allUserChatsSchema";
import { fetchAllUserChats } from "../service/allUserChats";

export const allUserChatsSlice = createSlice({
  name: "allUserChats",
  initialState: [] as AllUserChatsSchema,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllUserChats.fulfilled, (state, action) => {
      state = action.payload;
      return state;
    });
  },
});
export const { reducer: allUserChatsReducer } = allUserChatsSlice;
