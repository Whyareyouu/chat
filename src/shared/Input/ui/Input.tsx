import React, { FC, InputHTMLAttributes } from "react";
import { StyledInput } from "./Input.styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}
export const Input: FC<InputProps> = (props) => {
  return <StyledInput {...props} />;
};
