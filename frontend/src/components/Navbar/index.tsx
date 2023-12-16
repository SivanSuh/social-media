import Link from "next/link";
import Avatar from "../AvatarComponent";
import Style from "./style.module.css";
import Popup from "../Popup";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import Dropdown from "../Dropdown";
import { useOnClickOutside } from "@/hooks/useClickAway";
import { useRouter } from "next/navigation";
import { logout } from "@/store/slices/authSlice";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { authData } = useSelector((state: RootState) => state.auth);
  const clickRef = useRef(null);
  const router = useRouter();
  const dispatch = AppDispatch();

  useOnClickOutside(clickRef, () => setOpen(false));

  return (
    <nav className={Style.nav}>
      <Link href={"/"}>Logo</Link>
      <div>Search</div>
      <div ref={clickRef}>
        <Dropdown
          open={open}
          setOpen={setOpen}
          values={
            <div onClick={() => setOpen(true)}>
              <Avatar image={authData?.profilePicture} />
            </div>
          }
        >
          <div>
            <p>
              <Link href={"/profile"}>{authData?.userName}</Link>
            </p>
            {authData?.userName ? (
              <p
                className="cursor-pointer"
                onClick={() => {
                  dispatch(logout());
                  router.push("/auth/login");
                }}
              >
                Logout
              </p>
            ) : (
              <>
                <Link href="/auth/login">Login</Link>
                <br />
                <Link href="/auth/register">Register</Link>
              </>
            )}
          </div>
        </Dropdown>
      </div>
      {/* <Popup open={open} close={setOpen}>
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
      </Popup> */}
    </nav>
  );
};

export default Navbar;
