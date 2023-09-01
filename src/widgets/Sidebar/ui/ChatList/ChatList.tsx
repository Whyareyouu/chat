import React, { FC } from "react";
import { ShortUserProfile } from "shared/ui/ShortUserProfile/ShortUserProfile";
import { UserChats } from "../../model/types/allUserChatsSchema";
import { useSelector } from "react-redux";
import { getAllUserChats } from "widgets/Sidebar/model/selectors/getAllUserChats";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { chatActions } from "entities/Chat";

export const ChatList = () => {
  const chats = useSelector(getAllUserChats);
  const dispatch = useAppDispatch();
  const handleSelectMessageRecipient = (recipientId: string) => {
    dispatch(chatActions.setRecipientId(recipientId));
  };
  if (chats.length === 0) {
    return <p>У вас пока нет ни одного чата.</p>;
  }
  return (
    <>
      {chats.map((chat) => (
        <ShortUserProfile
          key={chat.contactId}
          username={"nikita"}
          lastMessage={chat.lastMessage}
          onClick={() => handleSelectMessageRecipient(chat.contactId)}
        />
      ))}
    </>
  );
};
