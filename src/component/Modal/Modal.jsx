import React, { useCallback, useState } from "react";
import style from "./Modal.module.css";
import cn from "classnames";

const Modal = (props) => {
  const { className, children, isOpen, onClose } = props;

  //   const [isClosing, setIsClosing] = useState(false);

  const closeHandler = () => {
    onClose();
  };

  return (
    <div className={cn(style.Modal, { [style.opened]: isOpen }, [className])}>
      <div className={style.overlay} onClick={closeHandler}>
        <div className={style.content} onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
