import React, { ButtonHTMLAttributes, FC } from "react";
import { StyledButton } from "shared/ui/Button/Button.styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return <StyledButton>{children}</StyledButton>;
};
