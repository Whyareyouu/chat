import React, {
  ChangeEvent,
  FC,
  Fragment,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useSelector } from "react-redux";
import { getUserData } from "entities/User";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {
  listenToMessageData,
  sendMessage,
  stopListenToMessageDataProps,
} from "features/Chat/model/service/chat";
import { getMessages } from "features/Chat/model/selectors/getMessages";
import { Message, MessageType } from "shared/ui/Message/Message";
import { StyledChat } from "./Chat.styles";
import { MessageSender } from "../MessageSender/MessageSender";

interface ChatProps {
  recipientId: string;
}

export const Chat: FC<ChatProps> = ({ recipientId }) => {
  const dispatch = useAppDispatch();
  const user = useSelector(getUserData);
  const messages = useSelector(getMessages);

  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    dispatch(
      listenToMessageData({ senderId: user!.id, recipientId: recipientId })
    ); //fix
    return () => {
      dispatch(stopListenToMessageDataProps());
    };
  }, []);

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = useCallback(() => {
    dispatch(
      sendMessage({
        senderId: user!.id, //fix
        recipientId: recipientId,
        content: message,
      })
    );
    setMessage("");
  }, [message, user, recipientId]);

  return (
    <StyledChat>
      {messages.map((message) => (
        <Fragment key={message.id}>
          {message.senderId === user?.id ? ( // fix
            <Message children={message.content} type={MessageType.OUTGOING} />
          ) : (
            <Message children={message.content} type={MessageType.INCOMING} />
          )}
        </Fragment>
      ))}
      <div>
        <MessageSender
          handleSendMessage={handleSendMessage}
          onChange={onChange}
          value={message}
        />
      </div>
    </StyledChat>
  );
};
