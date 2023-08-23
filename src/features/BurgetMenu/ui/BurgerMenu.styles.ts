import styled from "styled-components";
import { RxHamburgerMenu } from "react-icons/rx";

type BurgerProps = {
  isOpen: boolean;
};

export const BurgerIcon = styled(RxHamburgerMenu)`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
export const StyledBurgerMenu = styled.div<BurgerProps>`
  position: relative;
`;
export const BurgerList = styled.ul<BurgerProps>`
  width: 250px;
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  border-radius: 10px;
  margin-top: 20px;
  padding: 10px;
  position: absolute;
  top: 100%;
  left: -5px;
  background: #272626;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
export const BurgerItem = styled.li`
  cursor: pointer;
  display: flex;
  gap: 8px;
`;
