import Layout from "@/components/Layout";
import { useRouter } from "next/router";

const OtherUserDetailPage = () => {
  const router = useRouter();

  return (
    <Layout>
      <div>{router.query.slug}</div>
    </Layout>
  );
};
export default OtherUserDetailPage;
