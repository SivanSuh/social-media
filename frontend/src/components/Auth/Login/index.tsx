import Input from "@/components/Atom/Input";
import Style from "./style.module.css";
import Button from "@/components/Atom/Button";
import Link from "next/link";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { login } from "@/store/slices/authSlice";
import LoginModel from "@/models/LoginModel";
import { AppDispatch } from "@/store";
import { useRouter } from "next/navigation";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FieldValues>();

  const dispatch = AppDispatch();
  const router = useRouter();

  const onSubmit: SubmitHandler<FieldValues> = async (data: any) => {
    if (data.email.trim() == "" || data.password.trim() == "") return;
    await dispatch(login(data))
      .unwrap()
      .then(() => router.push("/"));
    console.log("data", data);
  };
  return (
    <div className={Style.login}>
      <h3>
        <strong>Login Page</strong>
      </h3>
      <form className="text-center" onSubmit={handleSubmit(onSubmit)}>
        <Input
          register={register}
          errors={errors}
          type="email"
          name="email"
          placeholder="email"
          required={false}
        />
        <Input
          register={register}
          errors={errors}
          type="password"
          name="password"
          placeholder="Password"
          required={false}
        />
        <Link href="/auth/register" className="hover:underline">
          Don't have Account?
        </Link>
        <Button title="Login" type="submit" />
        <Link href={"/"} className="hover:underline">
          Return Home
        </Link>
      </form>
    </div>
  );
};

export default Login;
