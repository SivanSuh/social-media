import React, { useEffect } from "react";
import Avatar from "../AvatarComponent";
import Style from "./style.module.css";
import { otherUsers } from "@/store/slices/authSlice";
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
    <>
      {OtherUser?.map((item: OtherUserModels) => {
        return (
          <React.Fragment key={item?._id}>
            {authData?._id !== item._id && (
              <Link
                href={`/other-user/${item?._id}`}
                className={Style.userCard}
                key={item._id}
              >
                <div className={Style.description}>
                  <Avatar image={item?.profilePicture} />
                  <h3>{item.userName}</h3>
                  {/* {item?.followers?.map((val: string) => {
                    return (
                      <>
                        {val.includes(authData?._id) ? (
                          <small className={Style.small}>Follow</small>
                        ) : (
                          <small className="text-red-500">Not Follow</small>
                        )}
                      </>
                    );
                  })} */}
                </div>
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </>
  );
};

export default UserCard;
