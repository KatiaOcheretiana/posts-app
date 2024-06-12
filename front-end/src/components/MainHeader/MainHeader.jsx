import React from "react";
import style from "./MainHeader.module.css";
import { MdPostAdd, MdMessage } from "react-icons/md";

export default function MainHeader({ onCreatePost }) {
  return (
    <header className={style.header}>
      <h1 className={style.logo}>
        <MdMessage />
        React Poster
      </h1>
      <p>
        <button className={style.button} onClick={onCreatePost}>
          <MdPostAdd size={18} />
          New Post
        </button>
      </p>
    </header>
  );
}
