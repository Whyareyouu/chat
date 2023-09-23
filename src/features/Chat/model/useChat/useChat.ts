import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useCallback, useEffect } from "react";
import { chatActions, MessagesWithUser } from "entities/Chat";
import { useSelector } from "react-redux";
import { getRecipientId } from "entities/Chat/model/selectors/getRecipientId/getRecipientId";
import { getUserId } from "entities/User";
import { io, Socket } from "socket.io-client";
import { BASE_URL } from "shared/api/api";

let socket: Socket;

export const useChat = () => {
  const recipientId = useSelector(getRecipientId);
  const senderId = useSelector(getUserId);
  const dispatch = useAppDispatch();

  if (!socket) {
    socket = io(BASE_URL, {
      query: {
        userId: senderId,
      },
    });
  }

  useEffect(() => {
    socket.on("messages", (messages: MessagesWithUser[]) => {
      Array.isArray(messages)
        ? dispatch(chatActions.setMessagesWithUser(messages))
        : dispatch(chatActions.updateMessagesWithUser(messages));
    });
    return () => {
      socket.off("messages");
    };
  }, []);

  useEffect(() => {
    socket.emit("message:get", { senderId, recipientId });
  }, [senderId, recipientId]);

  const sendMessage = useCallback((message: Omit<MessagesWithUser, "id">) => {
    socket.emit("message:post", message);
  }, []);

  const updateMessage = useCallback((message: MessagesWithUser) => {
    socket.emit("message:put", message);
  }, []);

  const removeMessage = useCallback((message: MessagesWithUser) => {
    socket.emit("message:delete", message);
  }, []);

  return {
    sendMessage,
    updateMessage,
    removeMessage,
  };
};
