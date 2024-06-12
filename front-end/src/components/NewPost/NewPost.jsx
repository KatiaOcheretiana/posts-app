import React, { useState } from "react";
import styles from "./NewPost.module.css";

export default function NewPost({ onCancel, addNewPost }) {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredName, setEnteredName] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const postData = {
      body: enteredBody,
      author: enteredName,
    };
    addNewPost(postData);
    onCancel();
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea
          id="body"
          required
          rows={3}
          onChange={(e) => setEnteredBody(e.target.value)}
        />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <textarea
          id="name"
          required
          rows={1}
          onChange={(e) => setEnteredName(e.target.value)}
        />
      </p>
      <p className={styles.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Submit</button>
      </p>
    </form>
  );
}
