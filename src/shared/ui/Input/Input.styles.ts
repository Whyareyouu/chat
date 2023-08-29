import styled from "styled-components";

export const StyledInput = styled.input`
  border: 2px solid var(--border-input);
  width: 100%;
  padding: 10px;
  background-color: var(--main-bg);
  border-radius: 30px;
  color: var(--white);
  font-size: var(--default-font-size);
  outline: none;
  ::placeholder {
    color: var(--placeholder-color);
  }
  &:focus {
    border: 2px solid var(--primary);
  }
  &:hover {
    border: 2px solid var(--primary-hover);
  }
`;
