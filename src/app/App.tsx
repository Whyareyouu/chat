import { Suspense, useEffect } from "react";
import GlobalStyles from "./styles/styles";
import { AppRouter } from "app/providers/router";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { userActions } from "entities/User/model/slice/userSlice";
import { fetchAllUserChats } from "widgets/Sidebar";
import { useSelector } from "react-redux";
import { fetchUserData, getUserInited } from "entities/User";

function App() {
  const inited = useSelector(getUserInited);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUserData());
    dispatch(fetchAllUserChats());
  }, [dispatch]);
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
