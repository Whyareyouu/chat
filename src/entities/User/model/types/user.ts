export interface User {
  id: string;
  username: string;
  email: string;
  name: string;
  avatar: string;
}

export interface UserSchema {
  userData?: User;
  isLoading: boolean;
  error?: string;
}
