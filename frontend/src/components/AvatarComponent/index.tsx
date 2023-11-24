import AvatarProps from "./props";
import Style from "./style.module.css";

const Avatar: React.FC<AvatarProps> = ({
  width = "32px",
  heigth = "32px",
  image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTph7EdNgE6hdgmsNjVDshDowbkzZJGT8rj1CPQA9t6bVxXALie1s97ZqxzEJvOszULgg0&usqp=CAU",
}) => {
  return (
    <img
      src={image}
      alt="image"
      className={Style.image}
      style={{ width: width, height: heigth }}
    />
  );
};

export default Avatar;
