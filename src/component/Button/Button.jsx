import React from "react";
import style from "./Button.module.css";
import cn from "classnames";
import { ReactComponent as ArrowIcons } from "./arrow.svg";

const Button = (props) => {
  const { className, children, appearance, arrow, ...other } = props;
  return (
    <button
      className={cn(
        style.Button,
        {
          [style.orange]: appearance === "orange",
          [style.danger]: appearance === "danger",
        },
        [className]
      )}
      {...other}
    >
      {children}
      {arrow && (
        <span className={style.arrow}>
          <ArrowIcons />
        </span>
      )}
    </button>
  );
};

export default Button;
