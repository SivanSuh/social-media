import { SidebarData } from "@/mock/index";
import Style from "./style.module.css";
import Link from "next/link";
import { Suspense } from "react";
import Loading from "../Loading";

const Sidebar = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div className={Style.sidebar}>
        {SidebarData.map((item) => (
          <Link href={item.url} className={Style.links} key={item.title}>
            {item.title}
          </Link>
        ))}
      </div>
    </Suspense>
  );
};

export default Sidebar;
