import { UserSchema } from "entities/User";
import { RegistrationSchema } from "features/RegisterationUser";
import { LoginSchema } from "features/AuthByUsername";
import { SearchingSchema } from "features/SearchingUsers";
import { ChatSchema } from "entities/Chat";
import { AllUserChatsSchema } from "widgets/Sidebar";

export interface StateSchema {
  user: UserSchema;
  registrationForm: RegistrationSchema;
  login: LoginSchema;
  chat: ChatSchema;
  searching: SearchingSchema;
  allUserChats: AllUserChatsSchema;
}
