import { useForm } from "react-hook-form";
import Input from "../Atom/Input";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import Style from "./style.module.css";
import Button from "../Atom/Button";
import { createNewPosts } from "@/store/slices/postCardSlice";

const INITIAL_STATE = {
  description: "",
  image: "",
};

const CreatePost = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: INITIAL_STATE,
  });
  const { authData } = useSelector((state: RootState) => state.auth);
  const dispatch = AppDispatch();

  const onSubmit = async (data: any) => {
    await dispatch(
      createNewPosts({
        ...data,
        user: authData?._id,
      })
    );
    reset(INITIAL_STATE);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={Style.createPost}>
      <Input
        register={register}
        errors={errors}
        name="description"
        placeholder="Desctiption"
        required
        type="text"
      />
      <Input
        register={register}
        errors={errors}
        name="image"
        required
        placeholder="Image"
        type="text"
      />
      <Button title="Submit" type="submit" />
    </form>
  );
};

export default CreatePost;
