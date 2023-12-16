import Avatar from "@/components/AvatarComponent";
import Layout from "@/components/Layout";
import { AppDispatch, RootState } from "@/store";
import { useSelector } from "react-redux";
import TabItem from "@/components/Tab/TabItem";
import Tab from "@/components/Tab";
import { useEffect, useState } from "react";
import FollowersCard from "@/components/FollowersCard";
import UserPost from "@/components/UserPost";
import { selectedUser } from "@/store/slices/authSlice";
import { getAllUserPost } from "@/store/slices/postCardSlice";

export default function Profile() {
  const { authData, selectUser } = useSelector(
    (state: RootState) => state.auth
  );
  const { userPost } = useSelector((state: RootState) => state.post);

  const dispatch = AppDispatch();

  const [tab, setTab] = useState("Follewers");
  useEffect(() => {
    dispatch(selectedUser(authData?._id as string));
  }, [authData?._id, dispatch]);

  useEffect(() => {
    dispatch(getAllUserPost(authData?._id as string));
  }, [dispatch, authData?._id]);
  return (
    <Layout>
      <main className="flex flex-col items-center">
        <Avatar image={authData?.profilePicture} width="150px" heigth="150px" />
        <h2>{authData?.userName}</h2>
        <Tab setTab={setTab}>
          <TabItem isActive={tab} title="Follewers" setTab={setTab}>
            <div className="flex flex-col justify-start  items-start gap-2">
              {Number(selectUser?.followers.length) > 0 ? (
                selectUser?.followers.map((item) => (
                  <p className="flex items-center gap-4">
                    <FollowersCard item={item} />
                  </p>
                ))
              ) : (
                <span className="text-red-500 text-center w-full">
                  Hiç takipçiniz yok
                </span>
              )}
            </div>
          </TabItem>

          <TabItem isActive={tab} title="Posts" setTab={setTab}>
            <div className="flex items-center flex-wrap  justify-between gap-4">
              {Number(userPost.length) > 0 ? (
                userPost?.map((item: any) => {
                  return <UserPost items={item} key={item._id} />;
                })
              ) : (
                <span className="text-red-500 text-center w-full">
                  Henuz bir Postunuz Bulunmamaktadır.
                </span>
              )}
            </div>
          </TabItem>
        </Tab>
      </main>
    </Layout>
  );
}
