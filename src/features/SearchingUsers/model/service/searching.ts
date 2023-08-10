import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { FoundUsers } from "../types/searchingSchema";

export const searchingUser = createAsyncThunk(
  "searching/user",
  async (searchingQuery: string) => {
    try {
      const response = await axios.get<FoundUsers[]>(
        `http://localhost:5555/users/${searchingQuery}`
      );

      return response.data;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
);
