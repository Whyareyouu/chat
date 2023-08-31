import { createAsyncThunk } from "@reduxjs/toolkit";
import { chatAPI } from "shared/api/api";
import { isAxiosError } from "axios";
import { User, userActions } from "entities/User";

export const updateUserAvatar = createAsyncThunk(
  "updateUserAvatar",
  async (avatar: FormData, thunkAPI) => {
    try {
      const response = await chatAPI.post<User>("/users/updateAvatar", avatar);
      if (isAxiosError(response)) {
        return thunkAPI.rejectWithValue(response.message);
      }
      thunkAPI.dispatch(userActions.updateUser(response.data));
      return response.data;
    } catch (e) {
      if (isAxiosError(e)) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  }
);
