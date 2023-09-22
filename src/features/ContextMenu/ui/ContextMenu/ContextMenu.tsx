import React, { FC, ReactNode, useCallback, useState } from "react";
import { useContextMenu } from "../../lib/hooks/useContextMenu";
import { StyledContextMenu } from "./ContextMenu.styles";
import { useSelector } from "react-redux";
import { getMessage } from "entities/Message";
import { EditMessage } from "features/ContextMenu/ui/EditMessage/EditMessage";
import { useChat } from "features/Chat";

type MenuContextProps = {
  children: ReactNode;
  className?: string;
};

export const ContextMenu: FC<MenuContextProps> = ({ children, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const message = useSelector(getMessage);

  const { updateMessage, removeMessage } = useChat();

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
    if (message.content) {
      navigator.clipboard.writeText(message.content);
    }
  }, [message]);

  const handleDeleteMessage = useCallback(() => {
    removeMessage(message);
  }, [message]);

  const toggleEdit = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <>
      <div onContextMenu={handleContextMenu} className={className}>
        {children}
        <EditMessage
          isOpen={isOpen}
          message={message}
          onClose={toggleEdit}
          updateMessage={updateMessage}
        />
      </div>
      {clicked && (
        <StyledContextMenu top={points.y} left={points.x}>
          <ul>
            <li onClick={toggleEdit}>Edit</li>
            <li onClick={handleCopyMessageText}>Copy</li>
            <li onClick={handleDeleteMessage}>Delete</li>
          </ul>
        </StyledContextMenu>
      )}
    </>
  );
};
