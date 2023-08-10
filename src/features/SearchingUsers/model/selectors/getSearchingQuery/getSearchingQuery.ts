import { StateSchema } from "app/providers/StoreProvider";

export const getSearchingQuery = (state: StateSchema) =>
  state.searching.searchingQuery;
