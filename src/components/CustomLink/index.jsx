import clsx from "clsx";
import React from "react";
import { RxArrowTopRight } from "react-icons/rx";
import { Link } from "react-router-dom";
import './CustomLink.css'
const CustomLink = (prop) => {
  const {
    children,
    url,
    className,
    iconEndText,
    bottomLine,
    textDark,
    textLight,
  } = prop;

  return (
    <Link
      to={url}
      className={clsx(" hover:text-red-600 truncate font-bold transition duration-300", className, {
        "bottomLine relative pb-1 inline-flex items-center": bottomLine,
        dark: textDark,
        light: textLight,
      })}
    >
      <span>{children}</span>
      {iconEndText && <RxArrowTopRight />}
    </Link>
  );
};

export default CustomLink;
