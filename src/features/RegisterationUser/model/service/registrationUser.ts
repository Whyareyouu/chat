import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localStorage";
import { User, userActions } from "entities/User";

interface RegistrationUserProps {
  username: string;
  email: string;
  password: string;
}

export const registrationUser = createAsyncThunk<
  User,
  RegistrationUserProps,
  { rejectValue: string }
>("registration/registrationUser", async (userData, thunkAPI) => {
  try {
    const response = await axios.post<User>(
      "http://localhost:5555/users/registration",
      userData
    );

    if (!response.data) {
      throw new Error();
    }

    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
    thunkAPI.dispatch(userActions.setAuthData(response.data));

    return response.data;
  } catch (e) {
    console.log(e);
    return thunkAPI.rejectWithValue("error");
  }
});