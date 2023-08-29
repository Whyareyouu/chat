export { userReducer, userActions } from "./model/slice/userSlice";
export type { UserSchema, User } from "./model/types/user";
export { getUserData } from "./model/selectors/getUserData/getUserData";
export { getUserId } from "./model/selectors/getUserId/getUserId";
export { getUserInited } from "./model/selectors/getUserInited/getUserInited";
export { fetchUserData } from "./model/services/fetchUserData";
