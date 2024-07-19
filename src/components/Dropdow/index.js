import React from "react";
import Button from "../Button";
import { NavLink } from "react-router-dom";
import "./Dropdow.css";
import clsx from "clsx";
const Dropdow = (prop) => {
  const { listPage, children } = prop;
  const { itemCenter, itemRight, itemLeft } = prop;

  const dropdownClassName = clsx(" dropdowItem inline-block h-full w-full", {
    "left-[-100px]": itemCenter,
    "right-0": itemRight,
    "left-0": itemLeft,
  });

  return (
    <div className={"dropdown inline-block h-full w-full"}>
      <div>{children}</div>
      {listPage ? (
        <div className={dropdownClassName}>
          {listPage.map(({ pageName, url, onClick }, index) => (
            <NavLink
              className="block px-4 py-4 hover:text-orange-500 bg-white border-1 border-line-border"
              key={index}
              to={url}
              onClick={onClick ? () => onClick() : undefined}
            >
              {pageName}
            </NavLink>
          ))}
        </div>
      ) : undefined}
    </div>
  );
};

export default Dropdow;
