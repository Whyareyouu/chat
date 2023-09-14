import React, { FC, ReactNode, useCallback } from "react";
import { useContextMenu } from "../libs/hooks/useContextMenu";
import { StyledContextMenu } from "./ContextMenu.styles";
import { useSelector } from "react-redux";
import {
  deleteMessage,
  getMessageContent,
  getMessageId,
} from "entities/Message";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";

type MenuContextProps = {
  children: ReactNode;
  className?: string;
};

export const ContextMenu: FC<MenuContextProps> = ({ children, className }) => {
  const messageContent = useSelector(getMessageContent);
  const messageId = useSelector(getMessageId);

  const dispatch = useAppDispatch();

  const { clicked, setClicked, points, setPoints } = useContextMenu();
  const handleContextMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setClicked(true);
    setPoints({
      x: e.pageX,
      y: e.pageY,
    });
  };

  const handleCopyMessageText = useCallback(() => {
    if (messageContent) {
      navigator.clipboard.writeText(messageContent);
    }
  }, [messageContent]);

  const handleDeleteMessage = useCallback(async () => {
    console.log(messageId);
    await dispatch(deleteMessage(messageId));
  }, [messageId]);

  const handleEditMessage = useCallback(() => {}, []);

  return (
    <>
      <div onContextMenu={handleContextMenu} className={className}>
        {children}
      </div>
      {clicked && (
        <StyledContextMenu top={points.y} left={points.x}>
          <ul>
            <li>Edit</li>
            <li onClick={handleCopyMessageText}>Copy</li>
            <li onClick={handleDeleteMessage}>Delete</li>
          </ul>
        </StyledContextMenu>
      )}
    </>
  );
};
