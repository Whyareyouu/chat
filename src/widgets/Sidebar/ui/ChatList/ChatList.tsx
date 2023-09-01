import { ShortUserProfile } from "shared/ui/ShortUserProfile/ShortUserProfile";
import { useSelector } from "react-redux";
import { getAllUserChats } from "widgets/Sidebar/model/selectors/getAllUserChats";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { chatActions } from "entities/Chat";
import { BASE_URL } from "shared/api/api";

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
          key={chat?.contactId}
          username={chat?.username}
          lastMessage={chat?.lastMessage}
          avatar={chat?.avatar && `${BASE_URL}/${chat.avatar}`}
          onClick={() => handleSelectMessageRecipient(chat.contactId)}
        />
      ))}
    </>
  );
};
