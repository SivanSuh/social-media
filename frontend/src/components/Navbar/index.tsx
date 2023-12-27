import Link from "next/link";
import Avatar from "../AvatarComponent";
import Style from "./style.module.css";
import Popup from "../Popup";
import { useMemo, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import Dropdown from "../Dropdown";
import { useOnClickOutside } from "@/hooks/useClickAway";
import { useRouter } from "next/navigation";
import { logout } from "@/store/slices/authSlice";
import Input from "../Atom/Input";
import { useForm } from "react-hook-form";
import UserCard from "../UserCard";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const { authData, OtherUser } = useSelector((state: RootState) => state.auth);

  const {
    register,
    formState: { errors },
    watch,
  } = useForm();

  const clickRef = useRef(null);
  const router = useRouter();
  const dispatch = AppDispatch();

  useOnClickOutside(clickRef, () => setOpen(false));

  const watchTheSearch = watch("input");
  const filteredData = OtherUser.filter((item: any) =>
    item?.userName?.toLowerCase().includes(watchTheSearch?.toLowerCase())
  );

  return (
    <nav className={Style.nav}>
      <Link href={"/"}>Logo</Link>
      <div onClick={() => setOpenModal(true)} style={{ cursor: "pointer" }}>
        Aramak istediğiniz Kullanıcı için Tıklayınız
      </div>
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
      <Popup open={openModal} close={() => setOpenModal(false)}>
        <Input
          errors={errors}
          required={false}
          name="input"
          type="text"
          placeholder="Kullanıcı Ara"
          register={register}
        />
        <br />
        <br />
        {filteredData?.map((val: any) => (
          <UserCard item={val} />
        ))}
      </Popup>
    </nav>
  );
};

export default Navbar;
