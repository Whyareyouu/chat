import { createAsyncThunk } from "@reduxjs/toolkit";
import { chatAPI } from "shared/api/api";
import { isAxiosError } from "axios";
import { User, userActions } from "entities/User";

export const fetchUserData = createAsyncThunk(
  "fetchUserData",
  async (_, { dispatch }) => {
    try {
      const response = await chatAPI.get<User>("/users/getMe");
      if (!response.data) {
        throw new Error();
      }
      dispatch(userActions.setAuthData(response.data));
      return response.data;
    } catch (e) {
      if (isAxiosError(e)) {
        console.log(e);
        return {
          message: e?.message,
        };
      }
    }
  }
);
