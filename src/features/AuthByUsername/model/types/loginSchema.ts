export interface LoginSchema {
  email: string;
  password: string;
  error?: null | string;
  isLoading: boolean;
}
