import styled, { css } from "styled-components";

type ModalProps = {
  isOpen: boolean;
};

export const StyledModal = styled.div<ModalProps>`
  position: fixed;
  inset: 0;
  z-index: -1;
  opacity: 0;
  pointer-events: none;
  ${(props) => {
    if (props.isOpen) {
      return css`
        pointer-events: auto;
        opacity: 1;
        z-index: 10;
      `;
    }
  }}
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background: rgb(0 0 0 / 60%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  max-width: 50%;
  padding: 20px;
  border-radius: 12px;
  background-color: #2a2828;
`;
