export interface ChatSchema {
  messagesWithUser: MessagesWithUser[];
}

export type MessagesWithUser = {
  id: string;
  senderId: string;
  recipientId: string;
  content: string;
};
