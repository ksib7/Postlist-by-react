import React from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { MyButton } from "../UI/Button/MyButton";
import { ErrorMessage } from "../UI/Error/ErrorMessage";
import { Preloader } from "../UI/Preloader/Preloader";

import { CSSTransition, TransitionGroup } from "react-transition-group";

import { useNavigate } from "react-router-dom";

import "./PostList.css";

export const PostList = ({
  active,
  setActive,
  postList,
  remove,
  error,
  preloader,
}) => {
  let navigate = useNavigate();

  return (
    <div>
      {preloader && <Preloader />}
      <TransitionGroup className="todo-list">
        {postList.map((item) => (
          <CSSTransition key={item.id} timeout={500} classNames="item">
            <List sx={{ width: "100%", bgcolor: "background.paper" }}>
              <div className="list">
                <ListItem
                  style={{ paddingLeft: "0px" }}
                  alignItems="flex-start"
                >
                  <ListItemText
                    style={{ paddingBottom: "30px" }}
                    primary={item.title}
                    secondary={
                      <Typography
                        sx={{ display: "block", marginTop: "10px" }}
                        component="div"
                        variant="body2"
                        color="text.primary"
                      >
                        {item.summary}
                      </Typography>
                    }
                  ></ListItemText>
                </ListItem>
                <div style={{ display: "flex", gap: "10px" }}>
                  <MyButton onClick={() => navigate(`/posts/${item.id}`)}>
                    Open
                  </MyButton>
                  <MyButton
                    onClick={() => remove(item)}
                    style={{ margin: "0px" }}
                  >
                    Remove
                  </MyButton>
                </div>
              </div>
              <Divider component="li" />
            </List>
          </CSSTransition>
        ))}
      </TransitionGroup>
      {error && <ErrorMessage>Ooops...something goes wrong!</ErrorMessage>}
    </div>
  );
};
