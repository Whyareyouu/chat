export { getSearchingQuery } from "./model/selectors/getSearchingQuery/getSearchingQuery";
export { getSearchResult } from "./model/selectors/getSearchResult/getSearchResult";
export { getIsSearchingBool } from "./model/selectors/getIsSearchingBool/getIsSearchingBool";
export type { SearchingSchema } from "./model/types/searchingSchema";
export {
  searchingReducer,
  searchingActions,
} from "./model/slice/searchingSlice";
export { SearchingUser } from "./ui/SearchingUser";
