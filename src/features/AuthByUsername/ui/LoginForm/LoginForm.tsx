import React, { useCallback } from "react";
import { StyledLoginForm } from "./LoginForm.styles";
import { Input } from "shared/ui/Input/Input";
import { Button } from "shared/ui/Button/Button";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { getLoginState } from "features/AuthByUsername/model/selectors/getLoginState";
import { loginActions } from "features/AuthByUsername/model/slice/loginSlice";
import { loginUser } from "features/AuthByUsername/model/service/loginUser";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { email, password } = useSelector(getLoginState);

  const onChangeEmail = useCallback(
    (value: string) => {
      dispatch(loginActions.setEmail(value));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  const onLogin = useCallback(async () => {
    await dispatch(loginUser({ email, password }));
    navigate("/");
  }, [email, password, dispatch]);

  return (
    <StyledLoginForm>
      <Input
        placeholder={"Введите эл. почту"}
        value={email}
        onChange={(e) => onChangeEmail(e.target.value)}
      />
      <Input
        placeholder={"Введите пароль"}
        value={password}
        onChange={(e) => onChangePassword(e.target.value)}
      />
      <Button onClick={onLogin}>Войти</Button>
    </StyledLoginForm>
  );
};
