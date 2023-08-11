import { createAsyncThunk } from "@reduxjs/toolkit";
import { socket } from "shared/config/socket/socket";
import { chatActions, MessagesWithUser } from "entities/Chat";

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
  socket.on("receiveMessages", (messages: MessagesWithUser[]) => {
    Array.isArray(messages)
      ? thunkAPI.dispatch(chatActions.setMessagesWithUser(messages))
      : thunkAPI.dispatch(chatActions.updateMessagesWithUser(messages));
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
  async (message: Omit<MessagesWithUser, "id">) => {
    socket.emit("sendMessage", message);
  }
);

// export const getInitialMessages = createAsyncThunk<
//   any, //fix
//   ListenToMessageDataProps
// >("chat/listenToMessageData", async (data, thunkAPI) => {
//   socket.emit("getMessages", {
//     senderId: data.senderId,
//     recipientId: data.recipientId,
//   });
//   socket.on("receiveMessages", (messages: MessagesWithUser[]) => {
//     thunkAPI.dispatch(chatActions.setMessagesWithUser(messages));
//   });
// });
