import styled, { css } from "styled-components";
type StyledContextMenuProps = {
  top: number;
  left: number;
};

export const StyledContextMenu = styled.div<StyledContextMenuProps>`
  position: absolute;
  width: 200px;
  z-index: 2;
  background-color: #343333;
  border-radius: 12px;
  ${({ top, left }) => css`
    top: ${top - 60}px;
    left: ${left}px;
  `}
  ul {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 10px;
    margin: 0;
    list-style: none;
  }
  ul li {
    padding: 10px 12px;
  }
  ul li:hover {
    cursor: pointer;
    border-radius: 4px;
    background-color: #262525;
  }
`;
