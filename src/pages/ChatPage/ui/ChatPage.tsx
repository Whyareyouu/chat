import { Chat } from "features/Chat";
import { fetchAllUserChats, Sidebar } from "widgets/Sidebar";
import { StyledChatPage } from "./ChatPage.styles";
import { useEffect } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";

const ChatPage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAllUserChats());
  }, [dispatch]);

  return (
    <StyledChatPage>
      <Sidebar />
      <Chat />
    </StyledChatPage>
  );
};

export default ChatPage;
