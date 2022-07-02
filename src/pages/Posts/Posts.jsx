import React, { useEffect, useState } from "react";
import { useMemo } from "react";

import { Header } from "../../components/Header/Header";
import { PostForm } from "../../components/PostForm/PostForm";
import { PostList } from "../../components/PostList/PostList";
import { MyButton } from "../../components/UI/Button/MyButton";
import { Filter } from "../../components/UI/Filter/Filter";
import { Input } from "../../components/UI/Input/Input";
import { Popup } from "../../components/UI/Modal/Popup";

export const Posts = () => {
  const [postList, setPostList] = useState([]);
  const [error, setError] = useState("");
  const [preloader, setPreloader] = useState(true);
  const [modal, setModal] = useState(false);
  const [filter, setFilter] = useState({
    sort: "",
    search: "",
  });

  const sortedPost = useMemo(() => {
    // Оптимизация отсортированных постов
    if (filter.sort) {
      return [...postList].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    } else {
      return postList;
    }
  }, [filter.sort, postList]);

  const sortedAndSearchPost = useMemo(() => {
    // Оптимизация поиска уже в отсортированных постах
    return sortedPost.filter((post) =>
      post.title.toLowerCase().includes(filter.search)
    );
  }, [filter.search, sortedPost]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      getPosts();
    }, 900);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const getPosts = async () => {
    try {
      const response = await fetch(
        "https://api.spaceflightnewsapi.net/v3/articles?&_limit=20"
      );
      const content = await response.json();
      setPostList(content);
    } catch (err) {
      setError(err.name);
    } finally {
      setPreloader(false);
    }
  };

  const addPost = (newPost) => {
    setPostList([...postList, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPostList(postList.filter((item) => item.id !== post.id));
  };

  return (
    <div>
      <Header />
      <Popup visible={modal} setVisible={setModal}>
        <PostForm add={addPost} />
      </Popup>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <MyButton onClick={() => setModal(true)}>Create post</MyButton>
        <Filter
          value={filter.sort}
          onChange={(selected) => setFilter({ ...filter, sort: selected })} // Приходит та опция, которую выбрал пользователь
          defaultName="Sort by:"
          options={[
            { value: "title", name: "By title" },
            { value: "summary", name: "By name" },
          ]}
        />
      </div>
      <Input
        onChange={(e) => setFilter({ ...filter, search: e.target.value })}
        value={filter.search}
        placeholder="Search . . ."
      />

      <PostList
        preloader={preloader}
        error={error}
        postList={sortedAndSearchPost}
        remove={removePost}
      />
    </div>
  );
};
