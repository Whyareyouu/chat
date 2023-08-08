import { UserSchema } from "entities/User";
import { RegistrationSchema } from "features/RegisterationUser";
import { LoginSchema } from "features/AuthByUsername";
import { ChatSchema } from "features/Chat/model/types/chatSchema";
import { SearchingSchema } from "features/SearchingUsers";

export interface StateSchema {
  user: UserSchema;
  registrationForm: RegistrationSchema;
  login: LoginSchema;
  chat: ChatSchema[];
  searching: SearchingSchema[];
}
