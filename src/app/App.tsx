import GlobalStyles from "./styles/styles";
import { RegistrationForm } from "features/RegisterationUser";
import { LoginForm } from "features/AuthByUsername";
function App() {
  return (
    <>
      <GlobalStyles />
      <RegistrationForm />
      <br />
      <LoginForm />
    </>
  );
}

export default App;
