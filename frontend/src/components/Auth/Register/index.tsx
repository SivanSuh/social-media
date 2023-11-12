import Input from "@/components/Atom/Input";
import Style from "./style.module.css";
import Button from "@/components/Atom/Button";
import Link from "next/link";

const Register = () => {
  return (
    <div className={Style.register}>
      <h3>
        <strong>Register Page</strong>
      </h3>
      <Input type="text" name="name" placeholder="User Name" />
      <Input type="text" name="Email" placeholder="Email" />
      <Input type="password" name="Password" placeholder="Password" />
      <Link href="/auth/login" className="hover:underline">
        Do you have Account?
      </Link>
      <Button title="Register" />
      <Link href={"/"} className="hover:underline">
        Return Home
      </Link>
    </div>
  );
};

export default Register;
