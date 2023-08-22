import { ChangeEvent, useCallback } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { searchingUser } from "../model/service/searching";
import { useDebounce } from "shared/lib/hooks/useDebounce/useDebounce";
import { useSelector } from "react-redux";
import { getSearchingQuery, searchingActions } from "features/SearchingUsers";
import { SearchInput } from "shared/ui/SearchInput/SearchInput";

export const SearchingUser = () => {
  const searchingQuery = useSelector(getSearchingQuery);
  const dispatch = useAppDispatch();
  const fetchSearchedUsers = useCallback(
    (value: string) => {
      dispatch(searchingUser(value));
    },
    [dispatch]
  );

  const debouncedFetchSearchedUsers = useDebounce(fetchSearchedUsers, 500);
  const handleSearching = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(searchingActions.setSearchingQuery(event.target.value));
    debouncedFetchSearchedUsers(event.target.value);
  };
  return (
    <SearchInput
      placeholder={"Поиск пользователей"}
      onChange={handleSearching}
      value={searchingQuery}
    />
  );
};
