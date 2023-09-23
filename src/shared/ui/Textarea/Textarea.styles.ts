import styled from "styled-components";

export const StyledTextarea = styled.textarea<{ lines?: number }>`
  width: 100%;
  resize: none;
  overflow-y: auto;
  height: ${({ lines }) => (lines ? `${lines * 1.5}em` : "auto")};
  max-height: 7.5em;
  padding: 10px;
  background: var(--input-bg-color);
  border-radius: var(--default-border-radius);
  border: none;
  color: var(--white);
  font-size: 16px;
  outline: none;
  ::placeholder {
    color: var(--placeholder-color);
  }
`;
