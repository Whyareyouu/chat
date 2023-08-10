import React, { useState } from "react";
import { Chat } from "features/Chat";
import { Sidebar } from "widgets/Sidebar";
import { StyledChatPage } from "./ChatPage.styles";

const ChatPage = () => {
  const [recipientId, setRecipientId] = useState("");
  const handleSelectMessageRecipient = (recipientId: string) => {
    setRecipientId(recipientId);
  };
  return (
    <StyledChatPage>
      <Sidebar handleSelectMessageRecipient={handleSelectMessageRecipient} />
      <Chat recipientId={recipientId} />
    </StyledChatPage>
  );
};

export default ChatPage;
