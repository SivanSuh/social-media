import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Layout from "@/components/Layout";
import PostCard from "@/components/PostCard";
import { useEffect, useState } from "react";
import { AppDispatch, RootState } from "@/store";
import Cookies from "js-cookie";
import { login } from "@/store/slices/authSlice";
import { useRouter } from "next/navigation";
import LoginPage from "./auth/login";
import postCardService from "@/service/postCardService";
import { useSelector } from "react-redux";
import PostCardModel from "@/models/PostCardModel";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }: any) {
  const [loginControl, setLoginControl] = useState<boolean>(false);

  const dispatch = AppDispatch();
  const refreshCookie = Cookies.get("login");
  const router = useRouter();

  console.log("dta,", data);
  useEffect(() => {
    if (refreshCookie) {
      dispatch(login(JSON.parse(refreshCookie)));
      setLoginControl(true);
    } else {
      setLoginControl(false);
      router.push("/auth/login");
    }
  }, [login]);

  return (
    <>
      <Head>
        <title>Social Media App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-7xl mx-auto">
        {loginControl ? (
          <Layout>
            {data.map((item: any) => {
              console.log("itemmm", item);
              return (
                <PostCard
                  description={item?.description}
                  image={item?.image}
                  id={item?.user?._id}
                  title={item?.user?.userName}
                  profileImage={item?.user?.profilePicture}
                  liked={item?.liked}
                />
              );
            })}
          </Layout>
        ) : (
          <LoginPage />
        )}
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const res = await postCardService.getAllPost();
  return {
    props: {
      data: res.data,
    },
  };
}
