import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { userReducer } from "entities/User";
import { registrationReducer } from "features/RegisterationUser";

export function createReduxStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    user: userReducer,
    registrationForm: registrationReducer,
  };

  return configureStore<StateSchema>({
    reducer: rootReducers,
    preloadedState: initialState,
  });
}
export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
