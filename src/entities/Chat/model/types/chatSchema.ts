export interface ChatSchema {
  messagesWithUser: MessagesWithUser[];
}

export type MessagesWithUser = {
  id: number;
  senderId: string;
  recipientId: string;
  content: string;
};
