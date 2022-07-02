import React from "react";

import { Header } from "../../components/Header/Header";
import { Card } from "../../components/UI/Card/Card";

import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";

import { MyButton } from "../../components/UI/Button/MyButton";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <Card>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "200px",
          }}
        >
          <LocalPostOfficeIcon style={{ fill: "#039be5", fontSize: "150px" }} />
          <MyButton
            onClick={() => navigate("/posts")}
            style={{ maxWidth: "150px", width: "100%" }}
          >
            See all posts
          </MyButton>
        </div>
      </Card>
    </div>
  );
};
