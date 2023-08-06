import React, { useState } from "react";
import { StyledAuthPage } from "./AuthPage.styles";
import { LoginForm } from "features/AuthByUsername";
import { RegistrationForm } from "features/RegisterationUser";
import { AuthType, AuthTypeSwitcher } from "widgets/AuthTypeSwitcher";

const AuthPage = () => {
  const [mode, setMode] = useState<AuthType>(AuthType.LOGIN);

  const handleChangeModeToReg = () => {
    setMode(AuthType.REGISTER);
  };
  const handleChangeModeToLogin = () => {
    setMode(AuthType.LOGIN);
  };

  return (
    <StyledAuthPage>
      <AuthTypeSwitcher
        mode={mode}
        handleChangeModeToLogin={handleChangeModeToLogin}
        handleChangeModeToReg={handleChangeModeToReg}
      />
      {mode === "login" ? <LoginForm /> : <RegistrationForm />}
    </StyledAuthPage>
  );
};

export default AuthPage;
