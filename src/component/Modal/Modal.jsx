import React, {useCallback, useEffect, useRef, useState} from "react";
import style from "./Modal.module.css";
import cn from "classnames";
import Portal from "../Portal/Portal.jsx";


const timer = null

const Modal = (props) => {
    const {className, children, isOpen, onClose} = props;

    // закрытие модалки с анимацией,
    const [isClosing, setIsClosing] = useState(false);

    const timeRef = useRef()

    const closeHandler = useCallback(() => {
        if (onClose) {

            setIsClosing(true)

            timeRef.current = setTimeout(() => {
                onClose()
                setIsClosing(false)
            }, 300)
        }

    }, [onClose]);


    const onKeyDown = useCallback((e) => {
        if (e.key === 'Escape') {
            closeHandler()
        }
    }, [isOpen])


    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown)
        }


        return () => {
            clearTimeout(timeRef.current)
            window.removeEventListener('keydown', onKeyDown)

        }
    }, [isOpen, onKeyDown])


    return (
        <Portal>
            <div className={cn(style.Modal, {
                [style.opened]: isOpen,
                [style.isClosing]: isClosing
            }, [className])}>
                <div className={style.overlay} onClick={closeHandler}>
                    <div className={style.content} onClick={(e) => e.stopPropagation()}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};

export default Modal;
