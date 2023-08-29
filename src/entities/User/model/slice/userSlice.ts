import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserSchema } from "../types/user";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localStorage";
import { loginUser } from "features/AuthByUsername/model/service/loginUser";

const initialState: UserSchema = {
  _inited: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.userData = action.payload;
    },
    logout: (state) => {
      state.userData = undefined;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state._inited = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state._inited = false;
      });
  },
});
export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
