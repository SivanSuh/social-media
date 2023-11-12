import Link from "next/link";
import Avatar from "../AvatarComponent";
import Style from "./style.module.css";

const Navbar = () => {
  return (
    <nav className={Style.nav}>
      <Link href={"/"}>Logo</Link>
      <div>Search</div>
      <Avatar />
    </nav>
  );
};

export default Navbar;
