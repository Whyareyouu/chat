import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  ACCESS_TOKEN,
  REFRESH_TOKEN,
  USER_LOCALSTORAGE_KEY,
} from "shared/const/localStorage";
import { fetchUserData, User, userActions } from "entities/User";
import { chatAPI } from "shared/api/api";

interface RegistrationUserProps {
  username: string;
  email: string;
  password: string;
}

interface Response {
  token: string;
  refreshToken: string;
}

export const registrationUser = createAsyncThunk<
  Response,
  RegistrationUserProps,
  { rejectValue: string }
>("registration/registrationUser", async (userData, thunkAPI) => {
  try {
    const response = await chatAPI.post<Response>(
      "/auth/registration",
      userData
    );

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
