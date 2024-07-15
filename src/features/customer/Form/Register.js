import { React, useRef } from "react";
import { useReducer } from "react";
import reducer, { initValue } from "../../../Reducer/Reducer";
import {
  setName,
  setEmail,
  setPhone,
  setPassword,
  setPasswordComfirmation,
} from "../../../Reducer/Action";

import "./Form.css";
import { Input, Button, BannerHeadPage } from "../../../components";
import validator from "./Validate";
import { Link } from "react-router-dom";

const Register = () => {
  const [state, dispatch] = useReducer(reducer, initValue);
  const { name, email, phone, password, passwordComfirmation } = state;

  const baseOptions = {
    form: "#registerForm",
    formGroupSelector: ".formGroup",
    errorSelector: ".formMessage",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleNameValidator();
    handleEmailValidator();
    handlePhoneValidator();
    handlePasswordValidator();
    handlePasswordComfirmationValidator();
  };

  const handleNameValidator = () => {
    handleValidator({
      ...baseOptions,
      rules: [
        validator.isRequired(`#name`, name),
        validator.isName("#name", name),
      ],
    });
  };

  const handleEmailValidator = () => {
    handleValidator({
      ...baseOptions,
      rules: [
        validator.isRequired("#email", email),
        validator.isEmail("#email", email),
      ],
    });
  };
  const handlePhoneValidator = () => {
    handleValidator({
      ...baseOptions,
      rules: [
        validator.isRequired("#phone", phone),
        validator.isPhone("#phone", phone),
      ],
    });
  };

  const handlePasswordValidator = () => {
    handleValidator({
      ...baseOptions,
      rules: [
        validator.isRequired("#password", password),
        validator.isPassword("#password", password),
      ],
    });
  };

  const handlePasswordComfirmationValidator = () => {
    handleValidator({
      ...baseOptions,
      rules: [
        validator.isRequired("#passwordComfirmation", passwordComfirmation),
        validator.isComfirmed(
          "#passwordComfirmation",
          passwordComfirmation,
          password
        ),
      ],
    });
  };
  const handleValidator = (options) => {
    validator(options);
  };

  return (
    <>
      {/* <BannerHeadPage title={"Đăng ký"} /> */}
      <div className="form ">
        <div className="formValue">
          <form className="grid justify-items-center " id="registerForm">
            <h1>ĐĂNG KÝ</h1>

            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => dispatch(setName(e.target.value))}
              Validator={handleNameValidator}
            >
              Nhập họ và tên
            </Input>

            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => dispatch(setEmail(e.target.value))}
              Validator={handleEmailValidator}
            >
              Nhập email
            </Input>

            <Input
              id="phone"
              type="text"
              value={phone}
              onChange={(e) => dispatch(setPhone(e.target.value))}
              Validator={handlePhoneValidator}
            >
              Nhập số điện thoại
            </Input>

            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => dispatch(setPassword(e.target.value))}
              Validator={handlePasswordValidator}
            >
              Nhập mật khẩu
            </Input>

            <Input
              id="passwordComfirmation"
              type="password"
              value={passwordComfirmation}
              onChange={(e) =>
                dispatch(setPasswordComfirmation(e.target.value))
              }
              Validator={handlePasswordComfirmationValidator}
            >
              Nhập lại mật khẩu
            </Input>
            <div className="w-3/4 mb-5 mt-1">
              <Button
                isFull
                afterAnimation
                black
                onClick={(e) => handleSubmit(e)}
              >
                Đăng Ký
              </Button>
            </div>
          </form>
          <div className="flex justify-center gap-1 pb-4">
            <span>nếu bạn đã có tài khoản, hãy</span>
            <Link to={'/login'} className="text-sky-700 underline decoration-1 hover:text-sky-600 transition">
              Đăng nhập
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
