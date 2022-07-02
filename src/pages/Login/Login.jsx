import React, { useContext } from "react";
import { AuthContext } from "../../components/context";

import { MyButton } from "../../components/UI/Button/MyButton";
import { Input } from "../../components/UI/Input/Input";

import cl from "./Login.module.css";

export const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const login = (e) => {
    e.preventDefault();
    setIsAuth(!isAuth);
    localStorage.setItem("auth", "true");
  };

  return (
    <form onSubmit={login} className={cl.loginWindow}>
      <Input autoFocus placeholder="Username" />
      <Input placeholder="Password" />
      <MyButton type="submit" style={{ marginTop: "10px" }}>
        Sign in
      </MyButton>
    </form>
  );
};
