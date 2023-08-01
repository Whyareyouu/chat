import styled from "styled-components";

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  background: var(--input-bg-color);
  border-radius: var(--default-border-radius);
  border: none;
  color: var(--white);
  font-size: var(--default-font-size);
  outline: none;
  ::placeholder {
    color: var(--placeholder-color);
  }
`;
