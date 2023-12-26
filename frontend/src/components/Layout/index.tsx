import React, { Suspense, lazy, useCallback, useEffect } from "react";
import Navbar from "../Navbar";
import LayoutProps from "./props";
import Sidebar from "../Sidebar";
import Style from "./style.module.css";
import Loading from "../Loading";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { otherUsers } from "@/store/slices/authSlice";

const UserCard = lazy(() => import("../UserCard"));

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const dispatch = AppDispatch();

  useEffect(() => {
    dispatch(otherUsers());
  }, []);

  return (
    <main className={Style.layout}>
      <Navbar />
      <div className={Style.alan}>
        <Sidebar />
        <div className={Style.post}>{children}</div>
        <div className="h-60 sticky top-24">
          <h2>Other User</h2>
          {/* <Suspense fallback={<Loading />}> */}
          <UserCard />
          {/* </Suspense> */}
        </div>
      </div>
    </main>
  );
};

export default Layout;
