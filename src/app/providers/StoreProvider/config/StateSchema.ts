import { UserSchema } from "entities/User";
import { RegistrationSchema } from "features/RegisterationUser";
import { LoginSchema } from "features/AuthByUsername";
import { ChatSchema } from "features/Chat/model/types/chatSchema";

export interface StateSchema {
  user: UserSchema;
  registrationForm: RegistrationSchema;
  login: LoginSchema;
  chat: ChatSchema[];
}
