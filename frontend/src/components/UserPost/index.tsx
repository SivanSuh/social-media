import Style from "./style.module.css";
import UserPostProps from "./props";
import React, { useState } from "react";
import Popup from "../Popup";
import PostCard from "../PostCard";

const UserPost: React.FC<UserPostProps> = ({ items }) => {
  const [open, setOpen] = useState(false);

  const selectPost = (item: any) => {
    setOpen(true);
  };
  return (
    <>
      <div className={Style.userPost} onClick={() => selectPost(items)}>
        <div className={Style.alan}>
          <img
            src={items.image}
            className="h-32 mx-auto mb-3"
            alt={items.description}
          />
          <p>{items.description}</p>
        </div>
      </div>
      <Popup close={setOpen} open={open}>
        <PostCard
          description={items?.description}
          image={items?.image}
          id={items?.user?._id}
          title={items?.user?.userName}
          profileImage={items?.user?.profilePicture}
          liked={items?.liked}
          key={items?._id}
          postId={items?._id}
        />
      </Popup>
    </>
  );
};
export default UserPost;
