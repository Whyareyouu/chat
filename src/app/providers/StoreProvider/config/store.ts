import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { userReducer } from "entities/User";
import { registrationReducer } from "features/RegisterationUser";
import { loginReducer } from "features/AuthByUsername";
import { chatReducer } from "features/Chat";

export function createReduxStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    user: userReducer,
    registrationForm: registrationReducer,
    login: loginReducer,
    chat: chatReducer,
  };

  return configureStore<StateSchema>({
    reducer: rootReducers,
    preloadedState: initialState,
  });
}
export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
