import Avatar from "../AvatarComponent";
import Style from "./style.module.css";
import { FaRegCommentDots } from "react-icons/fa";
import { GrLike } from "react-icons/gr";
import PostCardProps from "./props";
import Link from "next/link";

const PostCard: React.FC<PostCardProps> = ({
  profileImage,
  description,
  image,
  id,
  title,
  liked,
}) => {
  return (
    <div className={Style.postCard}>
      <Link href={`/other-user/${id}`} className={Style.title}>
        <Avatar image={profileImage} />
        <h4>{title}</h4>
      </Link>
      <img
        className={Style.image}
        src={image}
        // src="https://cdn.openart.ai/uploads/image_HW1DzHYv_1692848329931_512.webp"
        alt="manzara"
      />
      <div>{description}</div>
      <div className={Style.icons}>
        <div className={Style.icons}>
          <GrLike />
          <span>{liked?.length}</span>
        </div>
        <div />
        <FaRegCommentDots />
      </div>
    </div>
  );
};

export default PostCard;
