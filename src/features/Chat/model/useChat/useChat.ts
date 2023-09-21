import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useCallback, useEffect, useMemo } from "react";
import { socket } from "shared/config/socket/socket";
import { chatActions, MessagesWithUser } from "entities/Chat";
import { useSelector } from "react-redux";
import { getRecipientId } from "entities/Chat/model/selectors/getRecipientId/getRecipientId";
import { getUserId } from "entities/User";

export const useChat = () => {
  const recipientId = useSelector(getRecipientId);
  const senderId = useSelector(getUserId);
  const dispatch = useAppDispatch();

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
