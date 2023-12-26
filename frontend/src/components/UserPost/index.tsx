import Style from "./style.module.css";
import UserPostProps from "./props";
import React, { useEffect, useState } from "react";
import Popup from "../Popup";
import PostCard from "../PostCard";
import { AppDispatch, RootState } from "@/store";
import { selectedUser } from "@/store/slices/authSlice";
import { useSelector } from "react-redux";

const UserPost: React.FC<UserPostProps> = ({ items }) => {
  const [open, setOpen] = useState(false);

  const selectPost = (item: any) => {
    setOpen(true);
  };
  const { selectUser } = useSelector((state: RootState) => state.auth);

  const dispatch = AppDispatch();

  useEffect(() => {
    dispatch(selectedUser(items?.user));
  }, [items]);

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
          title={selectUser?.userName as string}
          profileImage={selectUser?.profilePicture as string}
          liked={items?.liked}
          key={items?._id}
          postId={items?._id}
        />
      </Popup>
    </>
  );
};
export default UserPost;
