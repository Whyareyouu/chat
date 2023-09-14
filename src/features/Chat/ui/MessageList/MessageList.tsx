import React, { FC, Fragment, useEffect, useRef } from "react";
import { MessagesWithUser } from "entities/Chat";
import { Message, MessageType } from "shared/ui/Message/Message";
import { MessageContainer } from "./MessageList.styles";
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
    <MessageContainer>
      {messages.map((message) => (
        <Fragment key={message.id}>
          {message.senderId === userId ? (
            <Message
              children={message.content}
              type={MessageType.OUTGOING}
              onContextMenu={() => dispatch(messageActions.setMessage(message))}
            />
          ) : (
            <Message
              children={message.content}
              type={MessageType.INCOMING}
              onContextMenu={() => dispatch(messageActions.setMessage(message))}
            />
          )}
        </Fragment>
      ))}
      <div ref={ref} />
    </MessageContainer>
  );
};
