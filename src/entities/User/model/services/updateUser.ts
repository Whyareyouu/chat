import { createAsyncThunk } from "@reduxjs/toolkit";
import { chatAPI } from "shared/api/api";
import { isAxiosError } from "axios";
import { User, userActions } from "entities/User";

interface UpdateUserData {
  name: string;
  username: string;
}

export const updateUser = createAsyncThunk<
  User,
  UpdateUserData,
  { rejectValue: string }
>("updateUser", async (data, thunkAPI) => {
  try {
    const response = await chatAPI.post<User>("/users/updateUser", data);
    if (isAxiosError(response)) {
      return thunkAPI.rejectWithValue(response.message);
    }
    thunkAPI.dispatch(userActions.updateUser(response.data));
    return response.data;
  } catch (e) {
    if (isAxiosError(e)) {
      return thunkAPI.rejectWithValue(e.message);
    }
    throw e;
  }
});
