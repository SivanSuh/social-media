import Link from "next/link";
import Avatar from "../AvatarComponent";
import Style from "./style.module.css";
import Popup from "../Popup";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { authData } = useSelector((state: RootState) => state.auth);
  console.log("auth data", authData);

  return (
    <nav className={Style.nav}>
      <Link href={"/"}>Logo</Link>
      <div>Search</div>
      <div onClick={() => setOpen(true)}>
        <Avatar image={authData?.profilePicture} />
      </div>
      <Popup open={open} close={setOpen}>
        <p>{authData?.userName}</p>
        {authData?.userName ? (
          <p>Logout</p>
        ) : (
          <>
            <Link href="/auth/login">Login</Link>
            <br />
            <Link href="/auth/register">Register</Link>
          </>
        )}
      </Popup>
    </nav>
  );
};

export default Navbar;
