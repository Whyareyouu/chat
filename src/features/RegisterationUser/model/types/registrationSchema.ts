export interface RegistrationSchema {
  username: string;
  email: string;
  password: string;
  error?: null | string;
  isLoading: boolean;
}
