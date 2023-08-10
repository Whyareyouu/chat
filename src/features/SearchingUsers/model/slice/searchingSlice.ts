import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FoundUsers, SearchingSchema } from "../types/searchingSchema";
import { searchingUser } from "../service/searching";
export const searchingSlice = createSlice({
  name: "searching",
  initialState: {
    searchResults: [],
    searchingQuery: "",
    isSearching: false,
    errors: "",
  } as SearchingSchema,
  reducers: {
    setSearchedUsers: (state, action: PayloadAction<FoundUsers[]>) => {
      state.searchResults = action.payload;
      return state;
    },
    setSearchingQuery: (state, action: PayloadAction<string>) => {
      state.searchingQuery = action.payload;
      state.isSearching = action.payload !== "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(searchingUser.fulfilled, (state, action) => {
      state.searchResults = action.payload;
    });
    builder.addCase(searchingUser.rejected, (state) => {
      state.errors = "ошибка";
    });
  },
});
export const { actions: searchingActions } = searchingSlice;
export const { reducer: searchingReducer } = searchingSlice;
