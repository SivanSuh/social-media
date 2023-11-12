import Style from "./style.module.css";
import InputProps from "./props";
import React from "react";

const Input: React.FC<InputProps> = ({ name, placeholder, type }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      className={Style.input}
    />
  );
};

export default Input;
