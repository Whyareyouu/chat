import { useSelector } from "react-redux";
import { getUserData, getUserError, getUserIsLoading } from "entities/User";
import { Navigate, useLocation } from "react-router-dom";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import React, { ReactNode } from "react";
import { ACCESS_TOKEN } from "shared/const/localStorage";

interface RequireAuthProps {
  children: ReactNode | React.JSX.Element;
}

export function RequireAuth({ children }: RequireAuthProps) {
  const isLoading = useSelector(getUserIsLoading);
  const error = useSelector(getUserError);
  const token = localStorage.getItem(ACCESS_TOKEN);
  const location = useLocation();

  if (!token || (!isLoading && error)) {
    return <Navigate to={RoutePath.auth} state={{ from: location }} replace />;
  }

  return <>{children}</>;
}
