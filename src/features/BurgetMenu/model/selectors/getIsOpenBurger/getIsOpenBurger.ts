import { StateSchema } from "app/providers/StoreProvider";

export const getIsOpenBurger = (state: StateSchema) => state.burger.isOpen;
