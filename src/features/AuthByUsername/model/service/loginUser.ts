import { createAsyncThunk } from "@reduxjs/toolkit";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "shared/const/localStorage";
import { chatAPI } from "shared/api/api";
import { fetchUserData } from "entities/User";

interface LoginProps {
  email: string;
  password: string;
}

interface Response {
  token: string;
  refreshToken: string;
}

export const loginUser = createAsyncThunk<
  Response,
  LoginProps,
  { rejectValue: string }
>("login/loginUser", async (userData, thunkAPI) => {
  try {
    const response = await chatAPI.post<Response>("/auth/login", userData);

    if (!response.data) {
      throw new Error();
    }

    localStorage.setItem(ACCESS_TOKEN, response.data?.token);
    localStorage.setItem(REFRESH_TOKEN, response.data?.refreshToken);

    thunkAPI.dispatch(fetchUserData());

    return response.data;
  } catch (e) {
    console.log(e);
    return thunkAPI.rejectWithValue("error");
  }
});
