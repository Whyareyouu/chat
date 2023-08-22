import styled from "styled-components";
import { RxHamburgerMenu } from "react-icons/rx";

export const StyledSidebar = styled.div`
  gap: 10px;
  max-width: 400px;
  height: 100vh;
  width: 100%;
  background: var(--user-list-bg);
`;

export const Settings = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 0 12px;
`;

export const BurgerMenu = styled(RxHamburgerMenu)`
  width: 20px;
  height: 20px;
`;

export const Users = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow-y: scroll;
`;
