import React, { useEffect, useState } from "react";
import Post from "../Post/Post";
import styles from "./PostsList.module.css";
import NewPost from "../NewPost/NewPost";
import Modal from "../Modal/Modal";

export default function PostsList({ isPosting, closeModal }) {
  const [posts, setPosts] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const addNewPost = (data) => {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });

    setPosts((prevState) => [data, ...prevState]);
  };

  useEffect(() => {
    const getPosts = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("http://localhost:8080/posts");
        const resData = await response.json();
        setPosts(resData.posts);
      } catch (error) {
        setIsError(error);
      } finally {
        setIsLoading(false);
      }
    };

    getPosts();
  }, []);

  return (
    <>
      {isPosting && (
        <Modal isOpen={isPosting} closeModal={closeModal}>
          <NewPost onCancel={closeModal} addNewPost={addNewPost} />
        </Modal>
      )}
      {!isLoading && !isError && posts.length > 0 && (
        <ul className={styles.posts}>
          {posts.map((item, index) => (
            <Post author={item.author} text={item.body} key={index} />
          ))}
        </ul>
      )}
      {!isLoading && !isError && posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet</h2>
          <p>Start adding some!</p>
        </div>
      )}
      {isLoading && (
        <div style={{ textAlign: "center", color: "white" }}>
          <p>Loading...</p>
        </div>
      )}

      {isError && (
        <div style={{ textAlign: "center", color: "white" }}>
          <p>Something went wrong. Try to reload the page.</p>
        </div>
      )}
    </>
  );
}
