import React, { ButtonHTMLAttributes, FC } from "react";
import { StyledButton } from "shared/ui/Button/Button.styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  onClick,
  type = "button",
  ...props
}) => {
  return (
    <StyledButton type={type} onClick={onClick} className={className}>
      {children}
    </StyledButton>
  );
};
