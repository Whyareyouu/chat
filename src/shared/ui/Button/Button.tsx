import React, { ButtonHTMLAttributes, FC } from "react";
import { StyledButton } from "shared/ui/Button/Button.styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ButtonTheme;
}

export enum ButtonTheme {
  DEFAULT = "default",
  PRIMARY = "primary",
}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  onClick,
  type = "button",
  theme = ButtonTheme.DEFAULT,
  ...props
}) => {
  return (
    <StyledButton
      theme={theme}
      type={type}
      onClick={onClick}
      className={className}
    >
      {children}
    </StyledButton>
  );
};
