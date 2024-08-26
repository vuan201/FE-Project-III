import React from "react";
import { Link } from "react-router-dom";

const IconFotter = ({ url, children }) => {
  return (
    <Link
      className="size-10 flex items-center justify-center border border-black text-black rounded-full transition-all hover:border-[#fe2c55] hover:text-[#fe2c55]"
      to={url}
    >
      {children}
    </Link>
  );
};

export default IconFotter;
