import React, { FC, TextareaHTMLAttributes, useEffect, useRef } from "react";
import { StyledTextarea } from "shared/ui/Textarea/Textarea.styles";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea: FC<TextareaProps> = ({
  onChange,
  placeholder,
  value,
  onKeyDown,
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const resizeTextArea = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  };

  useEffect(resizeTextArea, [value]);

  return (
    <StyledTextarea
      placeholder={placeholder}
      ref={textareaRef}
      value={value}
      rows={1}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};
