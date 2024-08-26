import React from "react";
import { Image } from "..";
import { logoApp } from "../../config";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <Link className="cursor-pointer" to={"/"}>
      <Image data={{ image: logoApp.url, name: logoApp.name }} />
    </Link>
  );
};

export default Logo;
