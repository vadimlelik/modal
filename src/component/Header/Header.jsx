import React from "react";
import style from "./Header.module.css";
import cn from "classnames";

const Header = (props) => {
  const { className, ...other } = props;
  return (
    <div className={cn(style.Header, {}, [className])} {...other}>
      <nav>
        <ul className={style.HeaderNav}>
          <li className={style.HeaderItem}>На Главную </li>
          <li>Инфо</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
