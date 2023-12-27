import Avatar from "../AvatarComponent";
import Style from "./style.module.css";
import { FaRegCommentDots } from "react-icons/fa";
import PostCardProps from "./props";
import Link from "next/link";
import { AppDispatch, RootState } from "@/store";
import { deletePostId, likeButton } from "@/store/slices/postCardSlice";
import { useSelector } from "react-redux";
import { SlLike } from "react-icons/sl";
import Popup from "../Popup";
import { useState } from "react";
import Button from "../Atom/Button";

const PostCard: React.FC<PostCardProps> = ({
  profileImage,
  description,
  image,
  id,
  title,
  liked,
  postId,
}) => {
  const [open, setOpen] = useState(false);
  const dispatch = AppDispatch();
  const { authData } = useSelector((stata: RootState) => stata.auth);

  const youLiked = liked?.includes(authData?._id);

  const deleteselectedPost = id === authData?._id;

  const deletedPost = async () => {
    await dispatch(deletePostId(postId as string));
    //setOpen(false);
  };

  return (
    <div className={Style.postCard}>
      <div className="flex justify-between items-center">
        <Link
          href={deleteselectedPost ? "/profile" : `/other-user/${id}`}
          className={Style.title}
        >
          <Avatar image={profileImage} />
          <h4>{title}</h4>
        </Link>
        {deleteselectedPost && (
          <div
            className="text-2xl cursor-pointer px-3 hover:text-red-700"
            onClick={() => setOpen(true)}
          >
            X
          </div>
        )}
      </div>
      <img
        className={Style.image}
        src={image}
        // src="https://cdn.openart.ai/uploads/image_HW1DzHYv_1692848329931_512.webp"
        alt="manzara"
      />
      <div>{description}</div>
      <div className={Style.icons}>
        <div
          className={Style.icons}
          style={{ cursor: "pointer" }}
          onClick={() => {
            dispatch(
              likeButton({
                userId: authData?._id,
                postId: postId,
              })
            );
          }}
        >
          <SlLike color={youLiked ? "red" : null} />
          <span className="mx-1">{liked?.length}</span>
        </div>
        <div />
        <FaRegCommentDots color="blue" />
      </div>
      <Popup open={open} close={() => setOpen(false)}>
        <p>Silmek İstediğinize Emin misiniz?</p>
        <br />
        <Button title="Sil" onClick={deletedPost} />
      </Popup>
    </div>
  );
};

export default PostCard;
