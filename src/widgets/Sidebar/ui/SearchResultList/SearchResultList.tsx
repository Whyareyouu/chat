import React, { FC } from "react";
import { ShortUserProfile } from "shared/ui/ShortUserProfile/ShortUserProfile";
import { FoundUsers } from "features/SearchingUsers/model/types/searchingSchema";

interface SearchResultListProps {
  searchResult: FoundUsers[];
  handleSelectMessageRecipient: (recipientId: string) => void;
}

export const SearchResultList: FC<SearchResultListProps> = ({
  searchResult,
  handleSelectMessageRecipient,
}) => {
  if (searchResult.length === 0) {
    return <p>Пользователи не найдены.</p>;
  }
  return (
    <>
      {searchResult.map((user) => (
        <ShortUserProfile
          key={user.id}
          username={user.username}
          onClick={() => handleSelectMessageRecipient(user.id)}
        />
      ))}
    </>
  );
};
