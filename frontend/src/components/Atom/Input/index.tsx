import Style from "./style.module.css";
import InputProps from "./props";
import React from "react";

const Input: React.FC<InputProps> = ({
  name,
  placeholder,
  type,
  errors,
  register,
  required,
}) => {
  return (
    <>
      <input
        autoComplete="off"
        type={type}
        placeholder={placeholder}
        name={name}
        //className={Style.input}
        className={`${errors?.[name] ? Style.errors : Style.input}`}
        {...register(name, { required })}
      />
      {/* {errors == true && <p className={Style.errors}>{errors.toString()}</p>} */}
    </>
  );
};

export default Input;
