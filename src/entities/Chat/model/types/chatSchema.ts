export interface ChatSchema {
  messagesWithUser: MessagesWithUser[];
  recipientId: string;
}

export type MessagesWithUser = {
  id: string;
  senderId: string;
  recipientId: string;
  content: string;
};
