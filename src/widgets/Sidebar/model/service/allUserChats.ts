import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { StateSchema } from "app/providers/StoreProvider";

interface UserChatAttrs {
  id: string;
}

export const fetchAllUserChats = createAsyncThunk(
  "fetchAllUserChats",
  async (_, { getState }) => {
    try {
      const state = getState() as StateSchema;
      const id = state.user.userData?.id;
      if (!id) {
        throw new Error();
      }
      const response = await axios.post("http://localhost:5555/messages/", {
        id: id,
      });
      if (!response) {
        throw new Error();
      }
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
);
