import { useForm } from "react-hook-form";
import Input from "../Atom/Input";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const CreatePost = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { authData } = useSelector((state: RootState) => state.auth);

  const onSubmit = (data) => {
    console.log("dataa", data);
  };

  return (
    <div>
      <Input
        register={register}
        errors={errors}
        name="description"
        required
        type="text"
      />
      <Input
        register={register}
        errors={errors}
        name="image"
        required
        type="text"
      />
    </div>
  );
};

export default CreatePost;
