import React from "react";
import { StyledLoginForm } from "./LoginForm.styles";
import { Input } from "shared/ui/Input/Input";

export const LoginForm = () => {
  return (
    <StyledLoginForm>
      <Input placeholder={"Введите эл. почту"} />
      <Input placeholder={"Введите пароль"} />
    </StyledLoginForm>
  );
};
