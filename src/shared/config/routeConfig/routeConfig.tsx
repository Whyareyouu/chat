import { RouteProps } from "react-router-dom";
import { AuthPage } from "pages/AuthPage";
import { ChatPage } from "pages/ChatPage";

export enum AppRoutes {
  MAIN = "main",
  AUTH = "auth",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.AUTH]: "/auth",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <ChatPage />,
  },
  [AppRoutes.AUTH]: {
    path: RoutePath.auth,
    element: <AuthPage />,
  },
};
