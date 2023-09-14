import { createAsyncThunk } from "@reduxjs/toolkit";
import { chatAPI } from "shared/api/api";
import { MessagesWithUser } from "entities/Chat";

export const editMessage = createAsyncThunk(
  "message/edit",
  async (message: MessagesWithUser) => {
    try {
      const response = await chatAPI.patch("/messages/update", message);
    } catch (e) {}
  }
);
