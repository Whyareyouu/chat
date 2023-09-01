import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BurgerSchema } from "../types/burgerSchema";
import { MenuSection } from "../../ui/menu.config";

export const burgerSlice = createSlice({
  name: "burger",
  initialState: {
    isOpen: false,
    selectedSection: MenuSection.ALL_CHATS,
  } as BurgerSchema,
  reducers: {
    toggleBurger: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
    setSelectSection: (state, action: PayloadAction<MenuSection>) => {
      state.selectedSection = action.payload;
    },
  },
});
export const { reducer: burgerReducer } = burgerSlice;
export const { actions: burgerActions } = burgerSlice;
