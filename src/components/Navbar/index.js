import React from "react";
import { NavLink } from "react-router-dom";
import Dropdow from "../Dropdow";
import "./Navbar.css";

const Navbar = () => {
  const listPage = [
    { pageName: "Home", url: "/" },
    { pageName: "Đaeng nhập", url: "/login" },
    { pageName: "Đăng ký", url: "/register" },
    { pageName: "Bộ sưu tập", url: "/collections" },
    { pageName: "Giỏ hàng", url: "/carts" },
  ];

  return (
    <nav className="navbar flex justify-left space-x-4 ">
      <div className="navItem rounded-lg px-4 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">
        <NavLink to={"/"}>Trang chủ</NavLink>
      </div>
      <div className="navItem rounded-lg px-4 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">
        <Dropdow listPage={listPage} itemLeft>
          Trang
        </Dropdow>
      </div>
    </nav>
  );
};

export default Navbar;
