import { createAsyncThunk } from "@reduxjs/toolkit";
import { socket } from "shared/config/socket/socket";
import { chatActions } from "features/Chat/model/slice/chatSlice";
import { ChatSchema } from "features/Chat/model/types/chatSchema";

interface ListenToMessageDataProps {
  senderId: string;
  recipientId: string;
}

export const listenToMessageData = createAsyncThunk<
  any, //fix
  ListenToMessageDataProps
>("chat/listenToMessageData", async (data, thunkAPI) => {
  socket.emit("getMessages", {
    senderId: data.senderId,
    recipientId: data.recipientId,
  });
  socket.on("receiveMessages", (messages: ChatSchema[]) => {
    thunkAPI.dispatch(chatActions.setMessages(messages));
  });
});

export const stopListenToMessageDataProps = createAsyncThunk(
  "chat/stopListenToMessageData",
  async () => {
    socket.off("receiveMessages");
  }
);

export const sendMessage = createAsyncThunk(
  "chat/sendMessage",
  async (message: Omit<ChatSchema, "id">) => {
    socket.emit("sendMessage", message);
  }
);
