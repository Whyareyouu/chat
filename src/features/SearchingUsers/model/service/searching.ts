import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { SearchingSchema } from "../types/searchingSchema";
import { searchingActions } from "../slice/searchingSlice";

export const searchingUser = createAsyncThunk(
  "searching/user",
  async (searchingQuery: string, { dispatch }) => {
    try {
      const response = await axios.get<SearchingSchema[]>(
        `http://localhost:5555/users/${searchingQuery}`
      );

      if (!response.data) {
        throw new Error();
      }

      dispatch(searchingActions.setSearchedUsers(response.data));

      return response.data;
    } catch (e) {
      console.log(e);
      dispatch(searchingActions.setSearchedUsers([]));
    }
  }
);
