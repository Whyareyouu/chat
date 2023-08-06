import styled from "styled-components";

export const StyledAuthTypeSwitcher = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Primary = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  color: var(--primary);
  &:hover {
    color: var(--primary-hover);
  }
`;
