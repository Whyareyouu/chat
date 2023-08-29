import styled from "styled-components";

export const StyledSidebar = styled.div`
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: var(--sidebar-width);
  height: 100vh;
  width: 100%;
  background: var(--user-list-bg);
`;

export const Settings = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Users = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow-y: scroll;
`;
