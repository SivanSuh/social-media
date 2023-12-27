import React, { useEffect } from "react";
import Avatar from "../AvatarComponent";
import Style from "./style.module.css";
import { followUserRequest, otherUsers } from "@/store/slices/authSlice";
import { AppDispatch, RootState } from "@/store";
import { useSelector } from "react-redux";
import OtherUserModels from "@/models/OtherUserModel";
import Link from "next/link";
import UserCardProps from "./props";

const UserCard: React.FC<UserCardProps> = ({ item }) => {
  const dispatch = AppDispatch();
  const { OtherUser, authData, followers } = useSelector(
    (state: RootState) => state.auth
  );

  const follow = item?.followers?.includes(authData?._id);

  return (
    <div className="flex flex-col">
      <React.Fragment key={item?._id}>
        {authData?._id !== item?._id && (
          <Link
            href={`/other-user/${item?._id}`}
            className={Style.userCard}
            passHref
          >
            <div className="flex gap-2 items-center">
              <Avatar image={item?.profilePicture} />
              <h3>{item?.userName}</h3>
            </div>
            <div
              className={Style.description}
              onClick={(e: any) => {
                e.preventDefault();
                e.stopPropagation();
                dispatch(
                  followUserRequest({
                    userID: authData?._id,
                    followUserId: item?._id,
                  })
                );
              }}
            >
              {follow ? (
                <span className={Style.small}>Follower</span>
              ) : (
                <span className={Style.follow}>Not Follower</span>
              )}
            </div>
          </Link>
        )}
      </React.Fragment>
    </div>
  );
};

export default UserCard;
