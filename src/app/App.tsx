import { Suspense } from "react";
import GlobalStyles from "./styles/styles";
import { AppRouter } from "app/providers/router";

function App() {
  return (
    <>
      <GlobalStyles />
      <Suspense fallback={<div>loading...</div>}>
        <AppRouter />
      </Suspense>
    </>
  );
}

export default App;
