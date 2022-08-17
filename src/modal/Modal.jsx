import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import style from "./Modal.module.scss";

const Modal = () => {
  const [open, setOpen] = React.useState(false);
  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };
  return (
    <div className={style.wrapper}>
      <button onClick={openModal}>Open Modal</button>
      {open && (
        <div className={style.overlay}>
          <AiFillCloseCircle onClick={closeModal} />
          <div className={style.modal}>
            <img src="img/item-1.jpg" alt="" />
          </div>
        </div>
      )}
    </div>
  );
};
export default Modal;
