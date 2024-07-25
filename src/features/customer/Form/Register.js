import { React, useRef } from "react";
import "./Form.css";
import { Input, Button } from "../../../components";
import validator from "./Validate";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Alert from "@mui/material/Alert";
import {
  selectAuthRegister,
  setName,
  setEmail,
  setPhone,
  setPassword,
  setPasswordComfirmation,
  register,
  selectAuthError,
} from "../../../app/reducers/";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const infomation = useSelector(selectAuthRegister);
  const error = useSelector(selectAuthError);

  const baseOptions = {
    form: "#registerForm",
    formGroupSelector: ".formGroup",
    errorSelector: ".formMessage",
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isName = handleNameValidator();
    const isEmail = handleEmailValidator();
    const isPhone = handlePhoneValidator();
    const isPassword = handlePasswordValidator();
    const isPasswordComfirmation = handlePasswordComfirmationValidator();

    // console.log(isName, isEmail, isPhone, isPassword, isPasswordComfirmation);

    if (isName && isEmail && isPhone && isPassword && isPasswordComfirmation) {
      dispatch(register(infomation));
      if (error) {
        console.log(error);
      } else {
        navigate("/");
      }
    }
  };

  const handleNameValidator = () => {
    return handleValidator({
      ...baseOptions,
      rules: [
        validator.isRequired(`#name`, infomation.name),
        validator.isName("#name", infomation.name),
      ],
    });
  };

  const handleEmailValidator = () => {
    return handleValidator({
      ...baseOptions,
      rules: [
        validator.isRequired("#email", infomation.email),
        validator.isEmail("#email", infomation.email),
      ],
    });
  };
  const handlePhoneValidator = () => {
    return handleValidator({
      ...baseOptions,
      rules: [
        validator.isRequired("#phone", infomation.phone),
        validator.isPhone("#phone", infomation.phone),
      ],
    });
  };

  const handlePasswordValidator = () => {
    return handleValidator({
      ...baseOptions,
      rules: [
        validator.isRequired("#password", infomation.password),
        validator.isPassword("#password", infomation.password),
      ],
    });
  };

  const handlePasswordComfirmationValidator = () => {
    return handleValidator({
      ...baseOptions,
      rules: [
        validator.isRequired(
          "#passwordComfirmation",
          infomation.passwordComfirmation
        ),
        validator.isComfirmed(
          "#passwordComfirmation",
          infomation.passwordComfirmation,
          infomation.password
        ),
      ],
    });
  };
  const handleValidator = (options) => validator(options);

  return (
    <>
      {/* <BannerHeadPage title={"Đăng ký"} /> */}
      <div className="form ">
        {/* <Alert variant="outlined" severity="success">
          This is an outlined success Alert.
        </Alert>
        <Alert variant="outlined" severity="info">
          This is an outlined info Alert.
        </Alert>
        <Alert variant="outlined" severity="warning">
          This is an outlined warning Alert.
        </Alert>
        <Alert variant="outlined" severity="error">
          This is an outlined error Alert.
        </Alert> */}
        <div className="formValue">
          <form className="grid justify-items-center " id="registerForm">
            <h1>ĐĂNG KÝ</h1>

            <Input
              id="name"
              type="text"
              value={infomation.name}
              onChange={(e) => dispatch(setName(e.target.value))}
              Validator={handleNameValidator}
            >
              Nhập họ và tên
            </Input>

            <Input
              id="email"
              type="email"
              value={infomation.email}
              onChange={(e) => dispatch(setEmail(e.target.value))}
              Validator={handleEmailValidator}
            >
              Nhập email
            </Input>

            <Input
              id="phone"
              type="text"
              value={infomation.phone}
              onChange={(e) => dispatch(setPhone(e.target.value))}
              Validator={handlePhoneValidator}
            >
              Nhập số điện thoại
            </Input>

            <Input
              id="password"
              type="password"
              value={infomation.password}
              onChange={(e) => dispatch(setPassword(e.target.value))}
              Validator={handlePasswordValidator}
            >
              Nhập mật khẩu
            </Input>

            <Input
              id="passwordComfirmation"
              type="password"
              value={infomation.passwordComfirmation}
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
            <Link
              to={"/login"}
              className="text-sky-700 underline decoration-1 hover:text-sky-600 transition"
            >
              Đăng nhập
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
