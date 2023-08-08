import { Input } from "shared/ui/Input/Input";
import { ChangeEvent, useCallback, useState } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { searchingUser } from "features/SearchingUsers/model/service/searching";
import { useDebounce } from "shared/lib/hooks/useDebounce/useDebounce";

export const SearchingUser = () => {
  const [searchingQuery, setSearchingQuery] = useState("");
  const dispatch = useAppDispatch();
  const fetchSearchedUsers = useCallback(
    (value: string) => {
      dispatch(searchingUser(value));
    },
    [dispatch]
  );

  const debouncedFetchSearchedUsers = useDebounce(fetchSearchedUsers, 500);
  const handleSearching = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchingQuery(event.target.value);
    debouncedFetchSearchedUsers(event.target.value);
  };
  return (
    <Input
      placeholder={"Поиск пользователей"}
      onChange={handleSearching}
      value={searchingQuery}
    />
  );
};
