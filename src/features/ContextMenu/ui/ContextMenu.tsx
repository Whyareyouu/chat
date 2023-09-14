import React, { FC, ReactNode } from "react";
import { useContextMenu } from "../libs/hooks/useContextMenu";
import { StyledContextMenu } from "./ContextMenu.styles";

type MenuContextProps = {
  children: ReactNode;
  className?: string;
};

export const ContextMenu: FC<MenuContextProps> = ({ children, className }) => {
  const { clicked, setClicked, points, setPoints } = useContextMenu();
  return (
    <>
      <div
        onContextMenu={(e) => {
          e.preventDefault();
          setClicked(true);
          setPoints({
            x: e.pageX,
            y: e.pageY,
          });
          console.log("Right Click", e.pageX, e.pageY);
        }}
        className={className}
      >
        {children}
      </div>
      {clicked && (
        <StyledContextMenu top={points.y} left={points.x}>
          <ul>
            <li>Edit</li>
            <li>Copy</li>
            <li>Delete</li>
          </ul>
        </StyledContextMenu>
      )}
    </>
  );
};
