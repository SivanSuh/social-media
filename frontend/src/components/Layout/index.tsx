import React, { Suspense, lazy } from "react";
import Navbar from "../Navbar";
import LayoutProps from "./props";
import Sidebar from "../Sidebar";
import Style from "./style.module.css";
import Loading from "../Loading";

const UserCard = lazy(() => import("../UserCard"));

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className={Style.layout}>
      <Navbar />
      <div className={Style.alan}>
        <Sidebar />
        <div className={Style.post}>{children}</div>
        <div>
          <h2>Other User</h2>
          <Suspense fallback={<Loading />}>
            <UserCard />
          </Suspense>
        </div>
      </div>
    </main>
  );
};

export default Layout;
