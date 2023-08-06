import React, { FC } from "react";
import { Primary, StyledAuthTypeSwitcher } from "./AuthTypeSwitcher.styles";

interface AuthTypeSwitcherProps {
  mode: string;
  handleChangeModeToLogin: () => void;
  handleChangeModeToReg: () => void;
}

export enum AuthType {
  LOGIN = "login",
  REGISTER = "register",
}

export const AuthTypeSwitcher: FC<AuthTypeSwitcherProps> = ({
  mode,
  handleChangeModeToReg,
  handleChangeModeToLogin,
}) => {
  return (
    <StyledAuthTypeSwitcher>
      <h1>{mode === AuthType.LOGIN ? "Войти" : "Создать аккаунт"}</h1>
      {mode === AuthType.LOGIN ? (
        <p>
          Войдите в аккаунт, или{" "}
          <Primary onClick={handleChangeModeToReg}>создайте новый</Primary>
        </p>
      ) : (
        <p>
          Создайте аккаунт, или{" "}
          <Primary onClick={handleChangeModeToLogin}>
            войдите в уже существующий
          </Primary>
        </p>
      )}
    </StyledAuthTypeSwitcher>
  );
};
