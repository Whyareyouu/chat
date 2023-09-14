import { FC, HTMLAttributes, ReactNode } from "react";
import { StyledMessage } from "shared/ui/Message/Message.styles";

export enum MessageType {
  INCOMING = "--message-bg-incoming",
  OUTGOING = "--message-bg-outgoing",
}

interface MessageProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  type?: MessageType;
}
export const Message: FC<MessageProps> = ({
  children,
  type = MessageType.INCOMING,
  ...props
}) => {
  return (
    <StyledMessage type={type} {...props}>
      {children}
    </StyledMessage>
  );
};
