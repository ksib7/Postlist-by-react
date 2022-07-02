import React, { useContext } from "react";

import { privateRoutes, publicRoutes } from "./routes";

import { Routes, Route, Navigate } from "react-router-dom";

import { AuthContext } from "../context";

export const Main = () => {
  const { isAuth } = useContext(AuthContext);

  return (
    <div className="container">
      {isAuth ? (
        <Routes>
          {privateRoutes.map((item) => (
            <Route key={item.id} path={item.path} element={item.component} />
          ))}
          <Route path="/login" element={<Navigate to="/home" replace />} />
        </Routes>
      ) : (
        <Routes>
          {publicRoutes.map((item) => (
            <Route key={item.id} path={item.path} element={item.component} />
          ))}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      )}
    </div>
  );
};
