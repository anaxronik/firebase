import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { routes } from "./routes";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route
            path={route.path}
            element={route.component()}
            key={route.path}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
