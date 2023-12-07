import Avatar from "@/components/AvatarComponent";
import Layout from "@/components/Layout";
import Tab from "@/components/Tab";
import TabItem from "@/components/Tab/TabItem";
import UserPost from "@/components/UserPost";
import { AppDispatch, RootState } from "@/store";
import { selectedUser } from "@/store/slices/authSlice";
import { getAllUserPost } from "@/store/slices/postCardSlice";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CiSignpostDuo1 } from "react-icons/ci";
import { SlUserFollowing } from "react-icons/sl";
import { useSelector } from "react-redux";

const OtherUserDetailPage = () => {
  const router = useRouter();
  const dispatch = AppDispatch();
  const { slug } = router.query;
  const { selectUser } = useSelector((state: RootState) => state.auth);
  const { userPost } = useSelector((state: RootState) => state.post);
  const [tab, setTab] = useState("Follewers");

  useEffect(() => {
    dispatch(selectedUser(slug as string));
  }, [slug, dispatch]);

  useEffect(() => {
    dispatch(getAllUserPost(slug as string));
  }, [dispatch, slug]);

  return (
    <Layout>
      <main className="flex flex-col items-center">
        <Avatar
          image={selectUser?.profilePicture}
          width="150px"
          heigth="150px"
        />
        <h2>{selectUser?.userName}</h2>

        <Tab setTab={setTab}>
          <TabItem isActive={tab} title="Follewers" setTab={setTab}>
            <div className="flex justify-center items-center gap-2">
              <SlUserFollowing />
              <p>{selectUser?.followers[0]}</p>
            </div>
          </TabItem>
          {/* <TabItem isActive={tab} title="Likes" setTab={setTab}>
            <div className="flex justify-center items-center gap-2">
              <CiSignpostDuo1 />
              <p>{selectUser?.liked[0]}</p>
            </div>
          </TabItem> */}
          <TabItem isActive={tab} title="Posts" setTab={setTab}>
            <div className="flex items-center justify-between gap-2">
              {userPost.map((item: any) => {
                return <UserPost items={item} key={item._id} />;
              })}
            </div>
          </TabItem>
        </Tab>
      </main>
    </Layout>
  );
};
export default OtherUserDetailPage;
