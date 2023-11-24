import Style from "./style.module.css";
import UserPostProps from "./props";
import React from "react";

const UserPost: React.FC<UserPostProps> = ({ items }) => {
  return (
    <div className={Style.userPost}>
      <div className={Style.alan}>
        <img
          src={items.image}
          className="h-32 mx-auto mb-3"
          alt={items.description}
        />
        <p>{items.description}</p>
      </div>
    </div>
  );
};
export default UserPost;
