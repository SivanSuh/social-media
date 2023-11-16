import Input from "@/components/Atom/Input";
import Style from "./style.module.css";
import Button from "@/components/Atom/Button";
import Link from "next/link";
import { FieldValues, useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FieldValues>();

  const onSubmit = (data: any) => {
    if (data.email.trim() == "" || data.password.trim() == "") return;
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
