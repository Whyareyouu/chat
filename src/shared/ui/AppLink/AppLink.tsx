import React, { FC, ReactNode } from "react";
import { StyledAppLink } from "shared/ui/AppLink/AppLink.styles";
import { LinkProps } from "react-router-dom";

interface AppLinkProps extends LinkProps {
  children: ReactNode;
}

export const AppLink: FC<AppLinkProps> = ({ children, to }) => {
  return <StyledAppLink to={to}>{children}</StyledAppLink>;
};
