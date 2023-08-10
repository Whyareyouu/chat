import styled from "styled-components";

export const StyledShortUserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px;
  background-color: var(--input-bg-color);
  border-radius: var(--default-border-radius);
  cursor: pointer;
  &:hover {
    background-color: var(--input-bg-hover);
  }
`;

export const UserInfo = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
`;

export const LastMessage = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
