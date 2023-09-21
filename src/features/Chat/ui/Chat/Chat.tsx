import React, { ChangeEvent, useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { getUserId } from "entities/User";

import { Wrapper } from "./Chat.styles";
import { MessageSender } from "../MessageSender/MessageSender";
import { getMessagesWithUser } from "entities/Chat";
import { EmptyChat } from "features/Chat/ui/EmptyChat/EmptyChat";
import { MessageList } from "features/Chat/ui/MessageList/MessageList";
import { getRecipientId } from "entities/Chat/model/selectors/getRecipientId/getRecipientId";
import { useChat } from "features/Chat/model/useChat/useChat";

export const Chat = () => {
  const recipientId = useSelector(getRecipientId);
  const userId = useSelector(getUserId);
  const messages = useSelector(getMessagesWithUser);
  const [message, setMessage] = useState<string>("");
  const { sendMessage } = useChat();

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = useCallback(() => {
    sendMessage({
      senderId: userId!,
      recipientId: recipientId,
      content: message,
    });
    setMessage("");
  }, [message, recipientId, userId]);

  if (!recipientId) {
    return <EmptyChat />;
  }
  return (
    <Wrapper>
      <MessageList messages={messages} userId={userId!} />
      <div>
        <MessageSender
          handleSendMessage={handleSendMessage}
          onChange={onChange}
          value={message}
        />
      </div>
    </Wrapper>
  );
};
