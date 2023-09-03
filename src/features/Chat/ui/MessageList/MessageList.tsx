import React, { FC, Fragment, useEffect, useRef } from "react";
import { MessagesWithUser } from "entities/Chat";
import { Message, MessageType } from "shared/ui/Message/Message";
import { MessageContainer } from "./MessageList.styles";
import { ContextMenu } from "features/ContextMenu";

interface MessageListProps {
  messages: MessagesWithUser[];
  userId: string;
}

export const MessageList: FC<MessageListProps> = ({ messages, userId }) => {
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
            <ContextMenu>
              <Message children={message.content} type={MessageType.OUTGOING} />
            </ContextMenu>
          ) : (
            <ContextMenu>
              <Message children={message.content} type={MessageType.INCOMING} />
            </ContextMenu>
          )}
        </Fragment>
      ))}
      <div ref={ref} />
    </MessageContainer>
  );
};
