export type AllUserChatsSchema = UserChats[];

export type UserChats = {
  contactId: string;
  lastMessage: string;
  username: string;
  avatar: string;
};
