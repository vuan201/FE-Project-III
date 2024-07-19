import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthToken, logout } from "../../app/reducers";

import { FaSearch, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { Dropdow, Navbar } from "../../components";

import { FiUser } from "react-icons/fi";
const Header = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectAuthToken);

  const headerClassName = clsx(
    "w-full bg-white-50 text-black text-center mb-8 mx-2",
    "border-b-1 border-line-border"
  );

  const navClassName = clsx(
    "flex flex-row",
    "gap-2",
    "relative",
    "bg-transparent"
  );

  const handleLogout = () => {
    dispatch(logout());
  };

  const authenLisPage = [
    { pageName: "Đăng nhập", url: "/login" },
    { pageName: "Đăng ký", url: "/register" },
  ];
  const authenLisPageIsLogin = [
    { pageName: "Quản lý tài khoản", url: "/" },
    { pageName: "Đăng xuất", onClick: handleLogout },
  ];

  return (
    <header className={headerClassName}>
      <div className={navClassName}>
        <div className="basis-1/3 self-center pl-8">
          <Navbar />
        </div>
        <div className="basis-1/3 self-center">
          {/* <Logo /> */}
          <h1>QM Shoe</h1>
        </div>
        <div className="basis-1/3 self-center flex justify-end pr-8">
          <div className="mr-4 navItem rounded-lg px-4 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">
            <FaSearch />
          </div>
          <div className="mr-4 navItem rounded-lg px-4 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">
            <FaShoppingCart />
          </div>
          <div className="mr-4 navItem rounded-lg px-4 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">
            <FaRegHeart />
          </div>
          <div className="mr-4 navItem rounded-lg px-4 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">
            {token === null ? (
              <Dropdow listPage={authenLisPage} itemRight>
                <FiUser />
              </Dropdow>
            ) : (
              <Dropdow listPage={authenLisPageIsLogin} itemRight>
                <FiUser />
              </Dropdow>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
