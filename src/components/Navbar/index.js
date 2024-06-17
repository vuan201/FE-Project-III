import React from "react";
import { NavLink } from "react-router-dom";
import Dropdow from "../Dropdow";
import "./Navbar.css";

const Navbar = () => {
  const listPage = [
    ["Home", "/"],
    ["Đăng ký", "/login"],
    ["Đaeng nhập", "/register"],
    ["Bộ lọc", "/filter"],
  ];

  return (
    <nav className="navbar flex justify-left space-x-4 ">
      <div className="navItem rounded-lg px-4 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">
        <NavLink to={'/'} >Home</NavLink>
      </div>
      <div className="navItem rounded-lg px-4 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">
        <Dropdow listPage={listPage}>Trang</Dropdow>
      </div>

    </nav>
  );
};

export default Navbar;
