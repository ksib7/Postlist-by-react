import React, { useState } from "react";
import { MyButton } from "../UI/Button/MyButton";
import { Input } from "../UI/Input/Input";

import { nanoid } from "nanoid";

export const PostForm = ({ add }) => {
  const [post, setPost] = useState({
    title: "",
    summary: "",
  });

  const clickHandler = (e) => {
    e.preventDefault();

    const newPost = {
      ...post,
      id: nanoid(),
    };

    add(newPost);

    setPost({ title: "", summary: "" });
  };

  return (
    <form onSubmit={clickHandler}>
      <Input
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        placeholder="Введите название . . ."
        type="text"
        autoFocus
      />
      <Input
        value={post.body}
        onChange={(e) => setPost({ ...post, summary: e.target.value })}
        placeholder="Введите описание . . ."
        type="text"
      />
      <MyButton
        style={{ marginTop: "10px" }}
        disabled={!post.title.length || !post.summary.length}
        type="submit"
      >
        Add
      </MyButton>
    </form>
  );
};
