import React from "react";
import style from "./Footer.module.css";
import cn from "classnames";

const Footer = (props) => {
  const { className, ...other } = props;
  return (
    <div className={cn(style.Footer, {}, [className])} {...other}>
      Footer
    </div>
  );
};

export default Footer;
