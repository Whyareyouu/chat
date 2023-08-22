import styled from "styled-components";

export const StyledShortUserProfile = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px;
  border-radius: var(--default-border-radius);
  cursor: pointer;
  &:hover {
    background-color: var(--user-list-hover);
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
