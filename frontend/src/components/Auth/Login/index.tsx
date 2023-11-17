import Input from "@/components/Atom/Input";
import Style from "./style.module.css";
import Button from "@/components/Atom/Button";
import Link from "next/link";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { login } from "@/store/slices/authSlice";
import LoginModel from "@/models/LoginModel";
import { AppDispatch, RootState } from "@/store";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FieldValues>();

  const { error } = useSelector((state: RootState) => state.auth);
  const dispatch = AppDispatch();
  const router = useRouter();

  const onSubmit: SubmitHandler<FieldValues> = async (data: any) => {
    console.log("errrrrorr", error);
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
        {error && <h2 className="text-center text-red-700">{error}</h2>}
      </form>
    </div>
  );
};

export default Login;
