import React, { FC } from "react";
import { ShortUserProfile } from "shared/ui/ShortUserProfile/ShortUserProfile";
import { UserChats } from "../../model/types/allUserChatsSchema";

interface ChatListProps {
  chats: UserChats[];
  handleSelectMessageRecipient: (contactId: string) => void;
}

export const ChatList: FC<ChatListProps> = ({
  chats,
  handleSelectMessageRecipient,
}) => {
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
