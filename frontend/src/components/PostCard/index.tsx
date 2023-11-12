import Avatar from "../AvatarComponent";
import Style from "./style.module.css";
import { FaRegCommentDots } from "react-icons/fa";
import { GrLike, GrDislike } from "react-icons/gr";

const PostCard = () => {
  return (
    <div className={Style.postCard}>
      <div className={Style.title}>
        <Avatar />
        <h4>Avatar Title</h4>
      </div>
      <img
        className={Style.image}
        src="https://cdn.openart.ai/uploads/image_HW1DzHYv_1692848329931_512.webp"
        alt="manzara"
      />
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit alias
        ipsam est!
      </div>
      <div className={Style.icons}>
        <GrLike />
        <GrDislike />
        <FaRegCommentDots />
      </div>
    </div>
  );
};

export default PostCard;
