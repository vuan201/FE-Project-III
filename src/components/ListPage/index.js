import React from "react";
import Button from "../Button";
import { NavLink } from "react-router-dom";
import './ListPage.css'
const ListPage = () => {
  return (
    <div className="dropdown">
      <Button blueBtn>Page</Button>
      <div className="dropdowItem">
        <NavLink to={"/"}>Trang chủ</NavLink>
        <NavLink to={"/login"}>Đăng nhập</NavLink>
        <NavLink to={"/register"}>Đăng ký</NavLink>
      </div>
    </div>
  );
};

export default ListPage;
