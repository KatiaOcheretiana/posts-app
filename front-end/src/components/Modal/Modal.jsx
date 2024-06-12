import React, { Children } from "react";
import styles from "./Modal.module.css";

export default function Modal({ children, isOpen, closeModal }) {
  return (
    <>
      <div className={styles.backdrop} onClick={closeModal} />
      <dialog open={isOpen} className={styles.modal}>
        {children}
      </dialog>
    </>
  );
}
