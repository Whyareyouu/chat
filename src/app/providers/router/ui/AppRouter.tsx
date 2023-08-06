import React from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {
  return (
    <Routes>
      {Object.values(routeConfig).map((route) => (
        <Route path={route.path} key={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default AppRouter;
