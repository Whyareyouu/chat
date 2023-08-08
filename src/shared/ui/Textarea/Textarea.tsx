import React, { ChangeEvent, FC, TextareaHTMLAttributes, useRef } from "react";
import { StyledTextarea } from "shared/ui/Textarea/Textarea.styles";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea: FC<TextareaProps> = ({
  onChange,
  placeholder,
  value,
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = textareaRef.current;
    if (textarea) {
      const lines = textarea.value.split("\n").length;
      textarea.setAttribute("rows", lines.toString());
    }
    if (onChange) {
      onChange(event);
    }
  };
  return (
    <StyledTextarea
      placeholder={placeholder}
      ref={textareaRef}
      value={value}
      rows={1}
      onChange={handleTextareaChange}
    />
  );
};
