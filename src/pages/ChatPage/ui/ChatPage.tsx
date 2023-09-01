import React, { useState } from "react";
import { Chat } from "features/Chat";
import { Sidebar } from "widgets/Sidebar";
import { StyledChatPage } from "./ChatPage.styles";

const ChatPage = () => {
  return (
    <StyledChatPage>
      <Sidebar />
      <Chat />
    </StyledChatPage>
  );
};

export default ChatPage;
