import React, { ChangeEvent, FC } from "react";
import { Textarea } from "shared/ui/Textarea/Textarea";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { StyledMessageSender } from "./MessageSender.styles";

interface MessageSenderProps {
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  handleSendMessage: () => void;
  value: string;
}

export const MessageSender: FC<MessageSenderProps> = ({
  onChange,
  handleSendMessage,
  value,
}) => {
  return (
    <StyledMessageSender>
      <Textarea placeholder={"Написать..."} onChange={onChange} value={value} />
      <Button theme={ButtonTheme.PRIMARY} onClick={handleSendMessage}>
        Отправить
      </Button>
    </StyledMessageSender>
  );
};
