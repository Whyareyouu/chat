import React, { FC, useEffect, useRef } from "react";
import { MessagesWithUser } from "entities/Chat";
import { Message, MessageType } from "shared/ui/Message/Message";
import { MessageContainer, MessagesContainer } from "./MessageList.styles";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { messageActions } from "entities/Message";

interface MessageListProps {
  messages: MessagesWithUser[];
  userId: string;
}

export const MessageList: FC<MessageListProps> = ({ messages, userId }) => {
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (messages.length) {
      ref.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [messages.length]);

  return (
    <MessagesContainer>
      {messages.map((message) => (
        <MessageContainer
          key={message.id}
          onContextMenu={() => dispatch(messageActions.setMessage(message))}
        >
          {message.senderId === userId ? (
            <Message children={message.content} type={MessageType.OUTGOING} />
          ) : (
            <Message children={message.content} type={MessageType.INCOMING} />
          )}
        </MessageContainer>
      ))}
      <div ref={ref} />
    </MessagesContainer>
  );
};
