import Avatar from "@/components/AvatarComponent";
import FollowersCard from "@/components/FollowersCard";
import Layout from "@/components/Layout";
import Loading from "@/components/Loading";
import Tab from "@/components/Tab";
import TabItem from "@/components/Tab/TabItem";
import UserPost from "@/components/UserPost";
import { AppDispatch, RootState } from "@/store";
import { selectedUser } from "@/store/slices/authSlice";
import { getAllUserPost } from "@/store/slices/postCardSlice";
import { useRouter } from "next/router";
import { Suspense, useEffect, useState } from "react";
import { SlUserFollowing } from "react-icons/sl";
import { useSelector } from "react-redux";
import { resetUser } from "@/store/slices/authSlice";

const OtherUserDetailPage = () => {
  const router = useRouter();
  const dispatch = AppDispatch();
  const { slug } = router.query;
  const { selectUser, OtherUser } = useSelector(
    (state: RootState) => state.auth
  );
  const { userPost } = useSelector((state: RootState) => state.post);
  const [tab, setTab] = useState("Follewers");

  useEffect(() => {
    dispatch(selectedUser(slug as string));
  }, [dispatch, slug]);

  useEffect(() => {
    dispatch(getAllUserPost(slug as string));
  }, [dispatch, slug]);

  useEffect(() => {
    return () => {
      dispatch(resetUser());
    };
  }, [dispatch]);
  return (
    <Layout>
      <Suspense fallback={<Loading />}>
        <main className="flex flex-col items-center">
          <Avatar
            image={selectUser?.profilePicture}
            width="150px"
            heigth="150px"
          />
          <h2>{selectUser?.userName}</h2>

          <Tab setTab={setTab}>
            <TabItem isActive={tab} title="Follewers" setTab={setTab}>
              <div className="flex flex-col justify-start  items-start gap-2">
                {Number(selectUser?.followers.length) > 0 ? (
                  selectUser?.followers.map((item: any) => (
                    <div className="flex items-center gap-4" key={item?._id}>
                      <FollowersCard item={item} />
                    </div>
                  ))
                ) : (
                  <span className="text-red-500 text-center w-full">
                    Hiç takipçiniz yok
                  </span>
                )}
              </div>
            </TabItem>
            <TabItem isActive={tab} setTab={setTab} title="Following">
              {Number(selectUser?.following?.length) > 0 ? (
                selectUser?.following.map((values: any) => (
                  <div className="flex items-center gap-4" key={values?._id}>
                    <FollowersCard item={values} />
                  </div>
                ))
              ) : (
                <span className="text-red-500 text-center w-full">
                  Hiç Takip Ettiğiniz Kişi yok
                </span>
              )}
            </TabItem>

            <TabItem isActive={tab} title="Posts" setTab={setTab}>
              <div className="flex items-center flex-wrap  justify-between gap-4">
                {Number(userPost?.length) > 0 ? (
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
      </Suspense>
    </Layout>
  );
};
export default OtherUserDetailPage;
