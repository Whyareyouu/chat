import React from "react";
import { StyledAuthPage } from "pages/AuthPage/ui/AuthPage.styles";
import { LoginForm } from "features/AuthByUsername";

const AuthPage = () => {
  return (
    <StyledAuthPage>
      <LoginForm />
    </StyledAuthPage>
  );
};

export default AuthPage;
