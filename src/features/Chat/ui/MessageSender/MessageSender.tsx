import React, {
  ChangeEvent,
  Dispatch,
  FC,
  KeyboardEvent,
  SetStateAction,
  useState,
} from "react";
import { Textarea } from "shared/ui/Textarea/Textarea";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import {
  EmojiPickerContainer,
  SelectEmoji,
  SendMessage,
  StyledMessageSender,
} from "./MessageSender.styles";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { Emoji } from "emoji-mart";

interface MessageSenderProps {
  setContent: Dispatch<SetStateAction<string>>;
  handleSendMessage: () => void;
  value: string;
}

export const MessageSender: FC<MessageSenderProps> = ({
  setContent,
  handleSendMessage,
  value,
}) => {
  const [showEmoji, setShowEmoji] = useState<boolean>(false);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter" && e.shiftKey) {
    } else if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleEmoji = () => {
    setShowEmoji((prev) => !prev);
  };

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleSelectEmoji = (e: typeof Emoji.Props) => {
    setContent((prev) => prev + e.native);
  };

  return (
    <StyledMessageSender>
      <div>
        <EmojiPickerContainer isVisible={showEmoji}>
          <Picker
            data={data}
            onEmojiSelect={handleSelectEmoji}
            perLine={7}
            skinTonePosition={"search"}
            previewPosition={"none"}
          />
        </EmojiPickerContainer>
        <div onClick={toggleEmoji}>
          <SelectEmoji />
        </div>
      </div>
      <Textarea
        placeholder={"Написать..."}
        onChange={onChange}
        value={value}
        onKeyDown={handleKeyDown}
      />
      <Button theme={ButtonTheme.PRIMARY} onClick={handleSendMessage}>
        <SendMessage />
      </Button>
    </StyledMessageSender>
  );
};
