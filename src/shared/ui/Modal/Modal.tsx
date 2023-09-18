import React, { ReactNode, useCallback, useEffect } from "react";
import { Portal } from "shared/ui/Portal/Portal";
import { Content, Overlay, StyledModal } from "shared/ui/Modal/Modal.styles";

interface ModalProps {
  className?: string;
  children: ReactNode;
  isOpen: boolean;
  onClose?: () => void;
}

export const Modal = ({ className, children, isOpen, onClose }: ModalProps) => {
  const closeHandler = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeHandler();
      }
    },
    [closeHandler]
  );
  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", onKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  return (
    <Portal>
      <StyledModal className={className} isOpen={isOpen}>
        <Overlay onClick={closeHandler}>
          <Content onClick={onContentClick}>{children}</Content>
        </Overlay>
      </StyledModal>
    </Portal>
  );
};
