import Input from "@/components/Atom/Input";
import Style from "./style.module.css";
import Button from "@/components/Atom/Button";
import Link from "next/link";

const Login = () => {
  return (
    <div className={Style.login}>
      <h3>
        <strong>Login Page</strong>
      </h3>
      <Input type="email" name="email" placeholder="email" />
      <Input type="password" name="password" placeholder="Password" />
      <Link href="/auth/register" className="hover:underline">
        Don't have Account?
      </Link>
      <Button title="Login" />
      <Link href={"/"} className="hover:underline">
        Return Home
      </Link>
    </div>
  );
};

export default Login;
