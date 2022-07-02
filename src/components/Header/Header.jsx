import React, { useContext } from "react";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import { AuthContext } from "../context";

import { Link, useLocation, matchPath } from "react-router-dom";

import { MyButton } from "../UI/Button/MyButton";

export const Header = ({ value }) => {
  const { setIsAuth } = useContext(AuthContext);
  const useRouteMatch = (patterns) => {
    const { pathname } = useLocation();

    for (let i = 0; i < patterns.length; i += 1) {
      const pattern = patterns[i];
      const possibleMatch = matchPath(pattern, pathname);
      if (possibleMatch !== null) {
        return possibleMatch;
      }
    }

    return null;
  };

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };

  const routeMatch = useRouteMatch(["/home", "/posts", "/about"]);
  const currentTab = routeMatch?.pattern?.path;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        marginBottom: "30px",
        border: "2px solid #039be5",
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Tabs value={currentTab}>
          <Tab label="Home" value="/home" to="/" component={Link} />
          <Tab label="Posts" value="/posts" to="/posts" component={Link} />
        </Tabs>
        <MyButton
          style={{ height: "40px", alignSelf: "center" }}
          onClick={logout}
        >
          Sign out
        </MyButton>
      </div>
    </div>
  );
};
