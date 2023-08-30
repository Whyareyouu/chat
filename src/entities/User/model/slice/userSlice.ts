import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserSchema } from "../types/user";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "shared/const/localStorage";
import { fetchUserData } from "entities/User";

const initialState: UserSchema = {
  isLoading: false,
  error: "",
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
      localStorage.removeItem(ACCESS_TOKEN);
      localStorage.removeItem(REFRESH_TOKEN);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action?.payload as string;
      })
      .addCase(fetchUserData.fulfilled, (state) => {
        state.isLoading = false;
      });
  },
});
export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
