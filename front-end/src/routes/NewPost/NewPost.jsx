import React from "react";
import styles from "./NewPost.module.css";
import Modal from "../../components/Modal/Modal";
import { Form, Link, redirect } from "react-router-dom";

export default function NewPost() {
  return (
    <Modal>
      <Form method="post" className={styles.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" required rows={3} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <textarea id="name" name="author" required rows={1} />
        </p>
        <p className={styles.actions}>
          <Link to={".."}>Cancel</Link>
          <button type="submit">Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export async function newPostAction({ request }) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);
  await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: { "Content-Type": "application/json" },
  });

  return redirect("/");
}
