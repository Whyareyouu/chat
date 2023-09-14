import { UserSchema } from "entities/User";
import { RegistrationSchema } from "features/RegisterationUser";
import { LoginSchema } from "features/AuthByUsername";
import { SearchingSchema } from "features/SearchingUsers";
import { ChatSchema, MessagesWithUser } from "entities/Chat";
import { AllUserChatsSchema } from "widgets/Sidebar";
import { BurgerSchema } from "features/BurgetMenu";

export interface StateSchema {
  user: UserSchema;
  registrationForm: RegistrationSchema;
  login: LoginSchema;
  chat: ChatSchema;
  searching: SearchingSchema;
  allUserChats: AllUserChatsSchema;
  burger: BurgerSchema;
  message: MessagesWithUser;
}
