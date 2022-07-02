import { nanoid } from "nanoid";
import { Home } from "../../pages/Home/Home";
import { Posts } from "../../pages/Posts/Posts";
import { PostId } from "../../pages/PostId/PostId";
import { Login } from "../../pages/Login/Login";

export const privateRoutes = [
  { id: nanoid(), path: "/", component: <Home /> },
  { id: nanoid(), path: "/posts", component: <Posts /> },
  { id: nanoid(), path: "/posts/:id", component: <PostId /> },
  { id: nanoid(), path: "*", component: <Home /> },
];

export const publicRoutes = [
  { id: nanoid(), path: "/login", component: <Login /> },
];
