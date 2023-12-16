import React, { useEffect } from "react";
import FollowerdCardProps from "./props";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import Avatar from "../AvatarComponent";

const FollowersCard: React.FC<FollowerdCardProps> = ({ item }) => {
  const { OtherUser } = useSelector((state: RootState) => state.auth);
  return (
    <>
      {OtherUser.filter((val: any) => val._id === item).map((values: any) => {
        return (
          <div className="w-20 flex items-center gap-3" key={values._id}>
            <Avatar image={values.profilePicture} />
            <span className="whitespace-nowrap">{values.userName}</span>
          </div>
        );
      })}
    </>
  );
};
export default FollowersCard;
