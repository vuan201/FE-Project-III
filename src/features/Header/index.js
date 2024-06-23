import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { Navbar } from "../../components";

import { FaSearch, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
const Header = () => {
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

  return (
    <header className={headerClassName}>
      <div className={navClassName}>
        <div className="basis-1/3 self-center">
          <Navbar />
        </div>
        <div className="basis-1/3 self-center">
          {/* <Logo /> */}
          <h1>QM Shoe</h1>
        </div>
        <div className="basis-1/3 self-center flex flex-row-reverse ">
          <div className="mx-4">
            <Link to={"/register "}>Đăng ký</Link>
          </div>
          <div className="mx-4">
            <Link to={"/login"}>Đăng nhập</Link>
          </div>
          <div className="mx-4 self-center">
            <FaShoppingCart />
          </div>
          <div className="mx-4 self-center">
            <FaRegHeart />
          </div>
          <div className="mx-4 self-center">
            <FiUser />
          </div>
          <div className="mx-4 self-center">
            <FaSearch />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
