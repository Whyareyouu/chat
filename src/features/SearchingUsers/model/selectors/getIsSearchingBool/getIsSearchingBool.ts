import { StateSchema } from "app/providers/StoreProvider";

export const getIsSearchingBool = (state: StateSchema) =>
  state.searching.isSearching;
