import { StateSchema } from "app/providers/StoreProvider";

export const getSearchedUsers = (state: StateSchema) => state.searching;
