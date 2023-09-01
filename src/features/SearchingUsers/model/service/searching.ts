import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { FoundUsers } from "../types/searchingSchema";
import { chatAPI } from "shared/api/api";

export const searchingUser = createAsyncThunk(
  "searching/user",
  async (searchingQuery: string) => {
    try {
      const response = await chatAPI.get<FoundUsers[]>(
        `/users/search/${searchingQuery}`
      );

      return response.data;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
);
