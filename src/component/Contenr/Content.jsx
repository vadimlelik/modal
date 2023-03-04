import React, { useState } from "react";
import { createPortal } from 'react-dom';
import style from "./Content.module.css";
import cn from "classnames";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";


const Content = (props) => {
  const { className, ...other } = props;
  const [open, setIsOpen] = useState(false);
  return (
    <div className={cn(style.Content, {}, [className])} {...other}>

      {/* <Button appearance="orange" arrow>
        Купить
      </Button>
      <Button appearance="danger">Удалить</Button> */}

      <Button appearance="orange" onClick={()=>setIsOpen(true)} > Open Modal</Button>

            <Modal
            isOpen={open}
            onClose={() => {
                setIsOpen(false);
            }}
        >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eligendi
            autem, pariatur neque cum maiores animi. A assumenda veniam quaerat,
            sint, sapiente laborum quisquam recusandae consequatur pariatur nam modi
            quae inventore facilis?
        </Modal>


    </div>
  );
};

export default Content;
