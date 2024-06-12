import { React, useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form bg-gradient-to-r from-indigo-100 to-white">
      <div className="formValue">
        <form
          className="grid justify-items-center bg-gradient-to-r from-indigo-50 to-indigo-100"
          id="loginForm"
        >
          <h1>ĐĂNG NHẬP</h1>

          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          >
            Nhập email
          </Input>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          >
            Nhập mật khẩu
          </Input>

          <div className="w-3/4 mb-5 mt-1">
            <Button blueBtn onClick={(e) => handleSubmit(e)}>
              Đăng nhập
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
