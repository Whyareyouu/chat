export interface ChatSchema {
  messagesWithUser: MessagesWithUser[];
  recipientId: string;
}

export type MessagesWithUser = {
  id: number;
  senderId: string;
  recipientId: string;
  content: string;
};
