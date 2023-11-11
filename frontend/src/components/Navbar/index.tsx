import Avatar from "../AvatarComponent";
import Style from "./style.module.css";

const Navbar = () => {
  return (
    <nav className={Style.nav}>
      <div>Logo</div>
      <div>Search</div>
      <Avatar />
    </nav>
  );
};

export default Navbar;
