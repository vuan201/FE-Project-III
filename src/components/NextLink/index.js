import React from "react";
import { Link } from "react-router-dom";
import { RxArrowTopRight } from "react-icons/rx";

import "./NextLink.css";
import clsx from "clsx";
const NextLink = ({ children = "tới Bộ sưu tập", url = "./", light, dark }) => {
  const className = clsx(
    "nextLink inline-flex items-center truncate font-bold uppercase relative pb-1 hover:text-red-600",
    {
      dark: dark,
      light: light,
    }
  );

  return (
    <Link to={url} className={className}>
      <span>{children}</span>
      <RxArrowTopRight />
    </Link>
  );
};

export default NextLink;
