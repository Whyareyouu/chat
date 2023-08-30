export { userReducer, userActions } from "./model/slice/userSlice";
export type { UserSchema, User } from "./model/types/user";
export { getUserData } from "./model/selectors/getUserData/getUserData";
export { getUserId } from "./model/selectors/getUserId/getUserId";
export { getUserError } from "./model/selectors/getUserError/getUserError";
export { getUserIsLoading } from "./model/selectors/getUserIsLoading/getUserIsLoading";
export { fetchUserData } from "./model/services/fetchUserData";
