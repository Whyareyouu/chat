import styled from "styled-components";

export const StyledShortUserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 8px;
  background-color: var(--input-bg-color);
  border-radius: var(--default-border-radius);
  cursor: pointer;
  &:hover {
    background-color: var(--input-bg-hover);
  }
`;
