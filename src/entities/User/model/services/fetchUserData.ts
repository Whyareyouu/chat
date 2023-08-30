import { createAsyncThunk } from "@reduxjs/toolkit";
import { chatAPI } from "shared/api/api";
import { isAxiosError } from "axios";
import { User, userActions } from "entities/User";

export const fetchUserData = createAsyncThunk(
  "fetchUserData",
  async (_, thunkAPI) => {
    try {
      const response = await chatAPI.get<User>("/users/getMe");
      if (isAxiosError(response)) {
        return thunkAPI.rejectWithValue(response.message);
      }
      thunkAPI.dispatch(userActions.setAuthData(response.data));
      return response.data;
    } catch (e) {
      if (isAxiosError(e)) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  }
);
