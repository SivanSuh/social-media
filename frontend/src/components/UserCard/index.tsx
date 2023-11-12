import Avatar from "../AvatarComponent";
import Style from "./style.module.css";

const UserCard = () => {
  return (
    <div className={Style.userCard}>
      <div className={Style.description}>
        <Avatar />
        <h3>Sivan Suh</h3>
      </div>
      <small>Frontend Developer</small>
    </div>
  );
};

export default UserCard;
