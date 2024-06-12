import React from "react";
import Navbar from "./Navbar";
import clsx from "clsx";
import Logo from "./Logo/Logo";
import SearchProduct from "./SearchProduct";
import ListPage from "./ListPage";
import { Link } from "react-router-dom";

const Header = () => {
  const navClassName = clsx(
    "grid",
    "grid-cols-12",
    "gap-2",
    "relative",
    'bg-gradient-to-t from-indigo-50 to-indigo-300'
  );

  return (
    <header>
      <div className={navClassName}>
        <div className="col-span-1 self-center">
          {/* <Logo /> */}
          <h1>QM Shoe</h1>
        </div>
        <div className="col-span-1 self-center">
          <ListPage />
        </div>
        <div className="col-start-4 col-span-6 self-center">
          <SearchProduct />
        </div>
        <div className="col-start-11 col-span-1 self-center">
          <Link to={"/register"}>Đăng ký</Link>
        </div>
        <div className="col-span-1 self-center">
          <Link to={"/login"}>Đăng nhập</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
