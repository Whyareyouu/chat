import React, {
  ChangeEvent,
  FC,
  Fragment,
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
} from "features/Chat/model/service/chat";
import { Message, MessageType } from "shared/ui/Message/Message";
import { ChatContainer, Wrapper } from "./Chat.styles";
import { MessageSender } from "../MessageSender/MessageSender";
import { getMessagesWithUser } from "entities/Chat";
import { EmptyChat } from "features/Chat/ui/EmptyChat/EmptyChat";

interface ChatProps {
  recipientId: string;
}

export const Chat: FC<ChatProps> = ({ recipientId }) => {
  const dispatch = useAppDispatch();
  const userId = useSelector(getUserId);
  const messages = useSelector(getMessagesWithUser);

  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    dispatch(
      listenToMessageData({ senderId: userId!, recipientId: recipientId })
    ); //fix
    return () => {
      dispatch(stopListenToMessageDataProps());
    };
  }, [recipientId]);

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
  }, [message, recipientId]);

  if (!recipientId) {
    return <EmptyChat />;
  }
  return (
    <Wrapper>
      <ChatContainer>
        {messages.map((message) => (
          <Fragment key={message.id}>
            {message.senderId === userId ? ( // fix
              <Message children={message.content} type={MessageType.OUTGOING} />
            ) : (
              <Message children={message.content} type={MessageType.INCOMING} />
            )}
          </Fragment>
        ))}
      </ChatContainer>

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
