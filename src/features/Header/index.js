import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthToken, logout } from "../../app/reducers";

import { FaSearch, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { Button, Dropdow, Image, Navbar, Overlay } from "../../components";

import { FiUser } from "react-icons/fi";
import clsx from "clsx";
import Logo from "./Logo";
import { logoApp } from "../../config";

const Header = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectAuthToken);

  const [receive, setReceive] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
  };

  const authenLisPage = [
    { pageName: "Đăng nhập", url: "/login" },
    { pageName: "Đăng ký", url: "/register" },
  ];
  const authenLisPageIsLogin = [
    { pageName: "Quản lý tài khoản", url: "/" },
    { pageName: "Đăng xuất", onClick: () => setReceive(true) },
  ];

  return (
    <header
      className={
        "w-full bg-white-50 text-black text-center my-4 mx-2 border-b-1 border-line-border relative "
      }
    >
      <Overlay isOverlay={receive} onClick={() => setReceive(false)}>
        <div
          className={clsx(
            "inset-1/2 relative max-w-80 cursor-auto -translate-x-1/2 -translate-y-1/2 p-5 bg-white z-10 text-center transition-opacity",
            {
              "opacity-0 invisible": !receive,
              "opacity-100 visible": receive,
            }
          )}
        >
          <div className="text-2xl pb-4">Bạn muốn đăng xuất?</div>
          <div className="flex gap-1 items-stretch justify-around ">
            <Button black isFull onClick={() => handleLogout()}>
              Đăng xuất
            </Button>
            <Button white isFull>
              Hủy
            </Button>
          </div>
        </div>
      </Overlay>

      <div className={"flex items-center gap-2 bg-transparent max-h-14"}>
        <div className="flex basis-1/2 self-center max-h-14">

          <Link className="basis-1/6 self-center cursor-pointer ml-4" to={"/"}>
            <Image data={{ image: logoApp.url, name: logoApp.name }} />
          </Link>

          <div className="pl-8 self-center">
            <Navbar />
          </div>
        </div>

        <div className="basis-1/2 flex justify-end pr-8">
          <div className="mr-4 navItem rounded-lg px-4 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900 cursor-pointer">
            <FaSearch />
          </div>
          <Link
            className="mr-4 navItem rounded-lg px-4 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900 cursor-pointer"
            to={"/carts"}
          >
            <FaShoppingCart />
          </Link>
          <div className="mr-4 navItem rounded-lg px-4 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900 cursor-pointer">
            <FaRegHeart />
          </div>
          <div className="mr-4 navItem rounded-lg px-4 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900 cursor-pointer">
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
