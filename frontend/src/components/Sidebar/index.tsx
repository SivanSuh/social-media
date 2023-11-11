import { SidebarData } from "@/mock/index";
import Style from "./style.module.css";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className={Style.sidebar}>
      {SidebarData.map((item) => (
        <Link href={item.url} className={Style.links}>
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
