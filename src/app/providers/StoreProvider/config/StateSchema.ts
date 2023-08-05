import { UserSchema } from "entities/User";
import { RegistrationSchema } from "features/RegisterationUser";

export interface StateSchema {
  user: UserSchema;
  registrationForm: RegistrationSchema;
}
