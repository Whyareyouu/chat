import React from "react";
import { Chat } from "features/Chat";
import { Sidebar } from "widgets/Sidebar";
import { StyledChatPage } from "./ChatPage.styles";

const ChatPage = () => {
  return (
    <StyledChatPage>
      <Sidebar />
      <Chat recipientId={"38c8f3bf-f0bf-4ff4-8ef0-576a15baf44f"} />
    </StyledChatPage>
  );
};

export default ChatPage;
