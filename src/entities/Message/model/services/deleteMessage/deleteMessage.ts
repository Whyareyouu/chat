import { createAsyncThunk } from "@reduxjs/toolkit";
import { chatAPI } from "shared/api/api";

export const deleteMessage = createAsyncThunk(
  "message/delete",
  async (id: string) => {
    try {
      const response = await chatAPI.delete("/messages/delete", {
        data: {
          id,
        },
      });
    } catch (e) {}
  }
);
