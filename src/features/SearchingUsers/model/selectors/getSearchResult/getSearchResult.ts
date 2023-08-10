import { StateSchema } from "app/providers/StoreProvider";

export const getSearchResult = (state: StateSchema) =>
  state.searching.searchResults;
