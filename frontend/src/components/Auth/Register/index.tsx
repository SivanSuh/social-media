import Input from "@/components/Atom/Input";
import Style from "./style.module.css";
import Button from "@/components/Atom/Button";
import Link from "next/link";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { AppDispatch, RootState } from "@/store";
import { registerRequest } from "@/store/slices/authSlice";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const Register = () => {
  const [selectImage, setImage] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();

  const dispatch = AppDispatch();
  const router = useRouter();
  const { error } = useSelector((state: RootState) => state.auth);

  const onSubmit: SubmitHandler<FieldValues> = async (data: any) => {
    console.log("data", data);
    await dispatch(registerRequest(data))
      .unwrap()
      .then(() => router.push("/"));
  };
  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={Style.register}>
      <h3>
        <strong>Register Page</strong>
      </h3>
      <form className="text-center" onSubmit={handleSubmit(onSubmit)}>
        <Input
          register={register}
          errors={errors}
          required={false}
          type="text"
          name="userName"
          placeholder="User Name"
        />
        <Input
          register={register}
          errors={errors}
          required={false}
          type="text"
          name="email"
          placeholder="Email"
        />
        {/* <div className={Style.alan}>
          <label htmlFor="file-upload" className={Style.label}>
            Image Upload
          </label>
          <input
            {...register("profilePicture")}
            type="file"
            accept="image/png, image/jpeg"
            name="profilePicture"
            id="file-upload"
            onChange={handleImageChange}
            className={Style.images}
          />
          {selectImage && (
            <img src={selectImage} alt="Preview" className={Style.picture} />
          )}
        </div> */}
        <Input
          register={register}
          errors={errors}
          type="text"
          required={false}
          name="profilePicture"
          placeholder="Profile Picture"
        />
        <Input
          register={register}
          errors={errors}
          required={false}
          type="password"
          name="password"
          placeholder="Password"
        />
        <Link href="/auth/login" className="hover:underline">
          Do you have Account?
        </Link>
        <Button title="Register" type="submit" />
        <Link href={"/"} className="hover:underline">
          Return Home
        </Link>
        {error && <h2 className="text-center text-red-700">{error}</h2>}
      </form>
    </div>
  );
};

export default Register;
