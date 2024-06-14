import React from "react";
import style from "./MainHeader.module.css";
import { MdPostAdd, MdMessage } from "react-icons/md";
import { Link } from "react-router-dom";

export default function MainHeader() {
  return (
    <header className={style.header}>
      <h1 className={style.logo}>
        <MdMessage />
        React Poster
      </h1>
      <p>
        <Link className={style.button} to="/create-post">
          <MdPostAdd size={18} />
          New Post
        </Link>
      </p>
    </header>
  );
}
