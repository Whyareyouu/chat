import { useSelector } from "react-redux";
import { getUserData } from "entities/User";
import { Navigate, useLocation } from "react-router-dom";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import React, { ReactNode } from "react";

interface RequireAuthProps {
  children: ReactNode | React.JSX.Element;
}

export function RequireAuth({ children }: RequireAuthProps) {
  const auth = useSelector(getUserData);
  const location = useLocation();

  if (!auth) {
    return <Navigate to={RoutePath.auth} state={{ from: location }} replace />;
  }

  return <>{children}</>;
}
