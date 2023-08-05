import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RegistrationSchema } from "../types/registrationSchema";
import { registrationUser } from "../service/registrationUser";

const initialState: RegistrationSchema = {
  username: "",
  email: "",
  password: "",
  error: null,
  isLoading: false,
};

export const registrationSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registrationUser.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(registrationUser.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(registrationUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: registrationActions } = registrationSlice;
export const { reducer: registrationReducer } = registrationSlice;
