import React, {
  ChangeEvent,
  FC,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useSelector } from "react-redux";
import { getUserId } from "entities/User";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {
  listenToMessageData,
  sendMessage,
  stopListenToMessageDataProps,
} from "../../model/service/chat";

import { Wrapper } from "./Chat.styles";
import { MessageSender } from "../MessageSender/MessageSender";
import { getMessagesWithUser } from "entities/Chat";
import { EmptyChat } from "features/Chat/ui/EmptyChat/EmptyChat";
import { MessageList } from "features/Chat/ui/MessageList/MessageList";
import { getRecipientId } from "entities/Chat/model/selectors/getRecipientId/getRecipientId";

export const Chat = () => {
  const recipientId = useSelector(getRecipientId);
  const userId = useSelector(getUserId);
  const messages = useSelector(getMessagesWithUser);
  const dispatch = useAppDispatch();

  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    dispatch(
      listenToMessageData({ senderId: userId!, recipientId: recipientId })
    );
    return () => {
      dispatch(stopListenToMessageDataProps());
    };
  }, [recipientId, dispatch]);

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = useCallback(() => {
    dispatch(
      sendMessage({
        senderId: userId!, //fix
        recipientId: recipientId,
        content: message,
      })
    );
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
