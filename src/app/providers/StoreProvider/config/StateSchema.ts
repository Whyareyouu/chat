import { UserSchema } from "entities/User";
import { RegistrationSchema } from "features/RegisterationUser";
import { LoginSchema } from "features/AuthByUsername";

export interface StateSchema {
  user: UserSchema;
  registrationForm: RegistrationSchema;
  login: LoginSchema;
}
