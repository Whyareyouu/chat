import React, { FC } from "react";
import { ShortUserProfile } from "shared/ui/ShortUserProfile/ShortUserProfile";
import { FoundUsers } from "features/SearchingUsers/model/types/searchingSchema";
import { useSelector } from "react-redux";
import { getSearchResult } from "features/SearchingUsers";
import { chatActions } from "entities/Chat";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";

export const SearchResultList = () => {
  const searchResult = useSelector(getSearchResult);
  const dispatch = useAppDispatch();

  const handleSelectMessageRecipient = (recipientId: string) => {
    dispatch(chatActions.setRecipientId(recipientId));
  };
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
