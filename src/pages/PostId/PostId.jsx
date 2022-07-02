import React, { useState } from "react";
import { useEffect } from "react";

import { useParams } from "react-router-dom";

import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EditIcon from "@mui/icons-material/Edit";

import { Header } from "../../components/Header/Header";

import "./PostId.css";

export const PostId = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const [isActive, setIsActive] = useState(false);

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  useEffect(() => {
    fetch(`https://api.spaceflightnewsapi.net/v3/articles/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  return (
    <div>
      <Header />
      <div className="container">
        <div>
          {post && (
            <Card style={{ margin: "0 auto" }} sx={{ maxWidth: 620 }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    R
                  </Avatar>
                }
                title={post.newsSite}
                subheader={post.publishedAt}
              />
              <CardMedia
                component="img"
                height="194"
                style={{ minHeight: "405px" }}
                image={post.imageUrl}
                alt="Pic"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {post.title}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton
                  onClick={() => setIsActive(!isActive)}
                  className={`heart ${isActive ? "clickedHeart" : null}`}
                  aria-label="add to favorites"
                >
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="edit">
                  <EditIcon />
                </IconButton>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Description:</Typography>
                  <Typography paragraph>{post.summary}</Typography>
                </CardContent>
              </Collapse>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};
