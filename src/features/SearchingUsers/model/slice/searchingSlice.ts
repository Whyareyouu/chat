import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SearchingSchema } from "../types/searchingSchema";
export const searchingSlice = createSlice({
  name: "searching",
  initialState: [] as SearchingSchema[],
  reducers: {
    setSearchedUsers: (state, action: PayloadAction<SearchingSchema[]>) => {
      state = action.payload;
      return state;
    },
  },
});
export const { actions: searchingActions } = searchingSlice;
export const { reducer: searchingReducer } = searchingSlice;
