import React, { useEffect } from "react";
import Avatar from "../AvatarComponent";
import Style from "./style.module.css";
import { followUserRequest, otherUsers } from "@/store/slices/authSlice";
import { AppDispatch, RootState } from "@/store";
import { useSelector } from "react-redux";
import OtherUserModels from "@/models/OtherUserModel";
import Link from "next/link";

const UserCard = () => {
  const dispatch = AppDispatch();
  const { OtherUser, authData } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    dispatch(otherUsers());
  }, []);

  return (
    <div className="flex flex-col">
      {OtherUser?.map((item: OtherUserModels) => {
        const follow = item?.followers.includes(authData?._id);

        return (
          <React.Fragment key={item?._id}>
            {authData?._id !== item._id && (
              <Link
                href={`/other-user/${item?._id}`}
                className={Style.userCard}
                key={item._id}
              >
                <Avatar image={item?.profilePicture} />
                <h3>{item.userName}</h3>
                <div className={Style.description}>
                  {follow ? (
                    <span className="text-green-400">Follower</span>
                  ) : (
                    <span className="text-red-600">Not Follower</span>
                  )}
                </div>
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default UserCard;
