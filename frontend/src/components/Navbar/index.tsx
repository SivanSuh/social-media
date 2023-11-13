import Link from "next/link";
import Avatar from "../AvatarComponent";
import Style from "./style.module.css";
import Popup from "../Popup";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className={Style.nav}>
      <Link href={"/"}>Logo</Link>
      <div>Search</div>
      <div onClick={() => setOpen(true)}>
        <Avatar />
      </div>
      <Popup open={open} close={setOpen}>
        <Link href="/auth/login">Login</Link>
        <br />
        <Link href="/auth/register">Register</Link>
      </Popup>
    </nav>
  );
};

export default Navbar;
