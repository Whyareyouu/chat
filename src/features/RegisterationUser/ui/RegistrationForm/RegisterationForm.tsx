import React, { useCallback } from "react";
import { StyledRegistrationForm } from "./RegisterationForm.styles";
import { Input } from "shared/ui/Input/Input";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { getRegState } from "features/RegisterationUser/model/selectors/getRegState";
import { registrationActions } from "features/RegisterationUser/model/slice/registrationSlice";
import { registrationUser } from "features/RegisterationUser/model/service/registrationUser";
import { Button } from "shared/ui/Button/Button";

export const RegistrationForm = () => {
  const dispatch = useAppDispatch();
  const { username, password, email } = useSelector(getRegState);
  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(registrationActions.setUsername(value));
    },
    [dispatch]
  );
  const onChangeEmail = useCallback(
    (value: string) => {
      dispatch(registrationActions.setEmail(value));
    },
    [dispatch]
  );
  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(registrationActions.setPassword(value));
    },
    [dispatch]
  );

  const onRegUser = useCallback(() => {
    dispatch(registrationUser({ username, email, password }));
  }, [username, email, password]);

  return (
    <StyledRegistrationForm>
      <Input
        placeholder={"Введите никнейм"}
        value={username}
        onChange={(e) => onChangeUsername(e.target.value)}
      />
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
      <Button onClick={onRegUser}>Create account</Button>
    </StyledRegistrationForm>
  );
};
