import AvatarProps from "./props";
import Style from "./style.module.css";

const Avatar: React.FC<AvatarProps> = ({
  image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTph7EdNgE6hdgmsNjVDshDowbkzZJGT8rj1CPQA9t6bVxXALie1s97ZqxzEJvOszULgg0&usqp=CAU",
}) => {
  return <img src={image} alt="image" className={Style.image} />;
};

export default Avatar;
