import styled, { css } from "styled-components";
import { ButtonTheme } from "shared/ui/Button/Button";

interface ButtonProps {
  theme?: ButtonTheme;
}

export const StyledButton = styled.button<ButtonProps>`
  font-size: 15px;
  color: var(--white);
  padding: 10px 20px;
  cursor: pointer;
  outline: none;
  border-radius: 10px;
  ${(props) =>
    props.theme === ButtonTheme.DEFAULT &&
    css`
      border: none;
      background: var(--message-bg-incoming);
      &:hover {
        background-color: #454c62;
      }
      &:focus {
        background-color: #454c62;
      }
    `}
  ${(props) =>
    props.theme === ButtonTheme.PRIMARY &&
    css`
      border: none;
      background: var(--primary);
      &:hover {
        background-color: var(--primary-hover);
      }
      &:focus {
        background-color: var(--primary-hover);
      }
    `}
`;
