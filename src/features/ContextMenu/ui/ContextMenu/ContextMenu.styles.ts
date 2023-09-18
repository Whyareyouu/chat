import styled, { css } from "styled-components";
type StyledContextMenuProps = {
  top: number;
  left: number;
};

export const StyledContextMenu = styled.div<StyledContextMenuProps>`
  position: absolute;
  width: 200px;
  background-color: #383838;
  border-radius: 5px;
  ${({ top, left }) => css`
    top: ${top}px;
    left: ${left}px;
  `}
  ul {
    padding: 10px;
    margin: 0;
    list-style: none;
  }
  ul li {
    padding: 18px 12px;
  }
  ul li:hover {
    cursor: pointer;
    background-color: #000000;
  }
`;
