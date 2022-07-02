import React, { useEffect, useState } from "react";

import { BrowserRouter } from "react-router-dom";

import { AuthContext } from "./components/context";
import { Main } from "./components/Routes/Router";

import "./style.css";

export const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
  }, []);

  return (
    <div>
      <AuthContext.Provider
        value={{
          isAuth,
          setIsAuth,
        }}
      >
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
};
