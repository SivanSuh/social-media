import Avatar from "@/components/AvatarComponent";
import Layout from "@/components/Layout";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import { SlUserFollowing } from "react-icons/sl";
import { CiSignpostDuo1 } from "react-icons/ci";

export default function Profile() {
  const { authData } = useSelector((state: RootState) => state.auth);
  return (
    <div className="max-w-7xl mx-auto">
      <Layout>
        <Avatar image={authData?.profilePicture} />
        <h2>{authData?.userName}</h2>
        <div className="flex items-center gap-3 my-2">
          <div>
            <SlUserFollowing />
            <p>Follewers</p>
          </div>
          <div>
            <CiSignpostDuo1 />
            <p>Posts</p>
          </div>
        </div>
      </Layout>
    </div>
  );
}
