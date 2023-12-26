import React from "react";
import ButtonProps from "./props";
import Style from "./style.module.css";

const Button: React.FC<ButtonProps> = ({
  title = "Send",
  type = "button",
  onClick,
}) => {
  return (
    <button type={type} className={Style.button} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
