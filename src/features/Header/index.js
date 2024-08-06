import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthToken, logout } from "../../app/reducers";

import { FaSearch, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { Overlay, PopupMessage } from "../../components";
import Navbar from "./containers/Navbar";
import Dropdow from "./components/Dropdow";
import { FiUser } from "react-icons/fi";
import Logo from "./components/Logo";
import HeaderIcons from "./components/HeaderIcons";

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
        "w-full bg-white-50 text-black text-center mt-4 mx-2 pb-4 border-b-1 border-line-border relative px-4"
      }
    >
      <Overlay isOverlay={receive} onClick={() => setReceive(false)}>
        <PopupMessage
          message={"Xác nhận đăng xuất?"}
          receive={receive}
          handleReceive={() => handleLogout()}
        />
      </Overlay>

      <div className={"flex items-center gap-2 bg-transparent max-h-14"}>
        <div className="flex basis-1/2 self-center max-h-14">
          <Link className="basis-1/6 self-center cursor-pointer" to={"/"}>
            <Logo />
          </Link>

          <div className="pl-8 self-center">
            <Navbar />
          </div>
        </div>

        <div className="basis-1/2 flex justify-end items-center">
          <HeaderIcons>
            <FaSearch />
          </HeaderIcons>

          <HeaderIcons url={"/carts"}>
            <FaShoppingCart />
          </HeaderIcons>

          <HeaderIcons>
            <FaRegHeart />
          </HeaderIcons>

          <HeaderIcons isLink={false}>
            {token === null ? (
              <Dropdow listPage={authenLisPage} itemRight>
                <FiUser />
              </Dropdow>
            ) : (
              <Dropdow listPage={authenLisPageIsLogin} itemRight>
                <FiUser />
              </Dropdow>
            )}
          </HeaderIcons>
        </div>
      </div>
    </header>
  );
};

export default Header;
