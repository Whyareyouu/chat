import { Suspense, useEffect } from "react";
import GlobalStyles from "./styles/styles";
import { AppRouter } from "app/providers/router";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { fetchUserData, getUserIsLoading } from "entities/User";

function App() {
  const isLoading = useSelector(getUserIsLoading);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);
  return (
    <>
      <GlobalStyles />
      <Suspense fallback={<div>loading...</div>}>
        {!isLoading && <AppRouter />}
      </Suspense>
    </>
  );
}

export default App;
