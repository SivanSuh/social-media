import Avatar from "../AvatarComponent";
import Style from "./style.module.css";
import { FaRegCommentDots } from "react-icons/fa";
import { GrLike } from "react-icons/gr";
import PostCardProps from "./props";

const PostCard: React.FC<PostCardProps> = ({
  profileImage,
  description,
  image,
  title,
}) => {
  return (
    <div className={Style.postCard}>
      <div className={Style.title}>
        <Avatar image={profileImage} />
        <h4>{title}</h4>
      </div>
      <img
        className={Style.image}
        src={image}
        // src="https://cdn.openart.ai/uploads/image_HW1DzHYv_1692848329931_512.webp"
        alt="manzara"
      />
      <div>{description}</div>
      <div className={Style.icons}>
        <GrLike />
        <div />
        <FaRegCommentDots />
      </div>
    </div>
  );
};

export default PostCard;
