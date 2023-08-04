import { FC, ReactNode } from "react";
import { StyledMessage } from "shared/ui/Message/Message.styles";

export enum MessageType {
  INCOMING = "--message-bg-incoming",
  OUTGOING = "--message-bg-outgoing",
}

interface MessageProps {
  children: ReactNode;
  type?: MessageType;
}
export const Message: FC<MessageProps> = ({
  children,
  type = MessageType.INCOMING,
}) => {
  return <StyledMessage type={type}>{children}</StyledMessage>;
};
