import styled from "styled-components";

export const StyledButton = styled.button`
  background: var(--message-bg-incoming);

  font-size: 15px;
  color: var(--white);
  padding: 10px 20px;

  outline: none;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #454c62;
  }
  &:focus {
    background-color: #454c62;
  }
`;
