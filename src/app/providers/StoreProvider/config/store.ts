import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { userReducer } from "entities/User";
import { registrationReducer } from "features/RegisterationUser";
import { loginReducer } from "features/AuthByUsername";
import { searchingReducer } from "features/SearchingUsers";
import { chatReducer } from "entities/Chat";
import { allUserChatsReducer } from "widgets/Sidebar";
import { burgerReducer } from "features/BurgetMenu";

export function createReduxStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    user: userReducer,
    registrationForm: registrationReducer,
    login: loginReducer,
    chat: chatReducer,
    searching: searchingReducer,
    allUserChats: allUserChatsReducer,
    burger: burgerReducer,
  };

  return configureStore<StateSchema>({
    reducer: rootReducers,
    preloadedState: initialState,
  });
}
export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
