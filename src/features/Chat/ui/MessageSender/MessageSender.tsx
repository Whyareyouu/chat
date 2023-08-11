import React, { ChangeEvent, FC, KeyboardEvent } from "react";
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
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter" && e.shiftKey) {
    } else if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
    }
  };
  return (
    <StyledMessageSender>
      <Textarea
        placeholder={"Написать..."}
        onChange={onChange}
        value={value}
        onKeyDown={handleKeyDown}
      />
      <Button theme={ButtonTheme.PRIMARY} onClick={handleSendMessage}>
        Отправить
      </Button>
    </StyledMessageSender>
  );
};
