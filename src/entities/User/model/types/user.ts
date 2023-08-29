export interface User {
  id: string;
  username: string;
  email: string;
  name: string;
  avatar: string;
}

export interface UserSchema {
  userData?: User;
  _inited: boolean;
}
