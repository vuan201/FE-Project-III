import { React, useState } from "react";
import { Button, Input } from "../../../components";
import { Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form ">
      <div className="formValue">
        <form className="grid justify-items-center " id="loginForm">
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
            <Button
              isFull
              afterAnimation
              black
              onClick={(e) => handleSubmit(e)}
            >
              Đăng nhập
            </Button>
          </div>
        </form>
        <div className="flex justify-center gap-1 pb-4">
          <span>nếu bạn chưa có tài khoản, hãy</span>
          <Link to={'/register'} className="text-sky-700 underline decoration-1 hover:text-sky-600 transition">
            Đăng ký
          </Link>
        </div>
        <div className="flex justify-center gap-1 pb-4">
          <span>nếu bạn quên mật khẩu, hãy</span>
          <Link className="text-sky-700 underline decoration-1 hover:text-sky-600 transition">
            Đặt lại mật khẩu
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
