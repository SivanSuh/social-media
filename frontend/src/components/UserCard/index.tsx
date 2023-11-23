import { useEffect } from "react";
import Avatar from "../AvatarComponent";
import Style from "./style.module.css";
import { otherUsers } from "@/store/slices/authSlice";
import { AppDispatch, RootState } from "@/store";
import { useSelector } from "react-redux";
import OtherUserModels from "@/models/OtherUserModel";

const UserCard = () => {
  const dispatch = AppDispatch();
  const { OtherUser, authData } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    dispatch(otherUsers());
  }, []);
  console.log("authData", OtherUser);
  return (
    <>
      {OtherUser?.map((item: OtherUserModels) => {
        return (
          <div className={Style.userCard} key={item._id}>
            <div className={Style.description}>
              <Avatar image={item?.profilePicture} />
              <h3>{item.userName}</h3>
              {authData?._id === item?._id ? (
                <small className={Style.small}>ME</small>
              ) : (
                <button className={Style.follow}>Follow</button>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default UserCard;
