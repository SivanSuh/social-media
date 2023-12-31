import React, { Suspense, lazy, useCallback, useEffect } from "react";
import Navbar from "../Navbar";
import LayoutProps from "./props";
import Sidebar from "../Sidebar";
import Style from "./style.module.css";
import Loading from "../Loading";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { otherUsers, resetUser } from "@/store/slices/authSlice";

const UserCard = lazy(() => import("../UserCard"));

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const dispatch = AppDispatch();
  const { OtherUser, authData, followers } = useSelector(
    (state: RootState) => state.auth
  );

  useEffect(() => {
    dispatch(otherUsers());
  }, [followers]);

  useEffect(() => {
    return () => {
      dispatch(resetUser());
    };
  }, [dispatch]);

  return (
    <main className={Style.layout}>
      <Navbar />
      <div className={Style.alan}>
        <Sidebar />
        <div className={Style.post}>{children}</div>
        <div className="h-60 sticky top-14">
          <h2>Other User</h2>
          {OtherUser?.map((item: any) => {
            return <UserCard item={item} />;
          })}
        </div>
      </div>
    </main>
  );
};

export default Layout;
