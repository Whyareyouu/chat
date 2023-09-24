import styled, { css } from "styled-components";
import { FaRegFaceSmile } from "react-icons/fa6";
import { AiOutlineSend } from "react-icons/ai";

type EmojiPickerProps = {
  isVisible: boolean;
};

export const StyledMessageSender = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  position: relative;
`;

export const SendMessage = styled(AiOutlineSend)`
  width: 18px;
  height: 18px;
`;

export const EmojiPickerContainer = styled.div<EmojiPickerProps>`
  position: absolute;
  visibility: hidden;
  transition: 0.3s all;
  transform: scale(0);
  bottom: 50px;
  ${(props) => {
    if (props.isVisible) {
      return css`
        visibility: visible;
        transform: scale(1);
      `;
    }
  }}
`;
export const SelectEmoji = styled(FaRegFaceSmile)`
  width: 30px;
  height: 30px;
  transition: 0.2s all;
  cursor: pointer;
  &:hover {
    fill: var(--primary);
  }
`;
