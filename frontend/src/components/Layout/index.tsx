import React from "react";
import Navbar from "../Navbar";
import LayoutProps from "./props";
import Sidebar from "../Sidebar";
import Style from "./style.module.css";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className={Style.layout}>
      <Navbar />
      <div className={Style.alan}>
        <Sidebar />
        <div className={Style.post}>{children}</div>
        <div>Other User</div>
      </div>
    </main>
  );
};

export default Layout;
