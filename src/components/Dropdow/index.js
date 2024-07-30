import React from "react";
import Button from "../Button";
import { Link, NavLink } from "react-router-dom";
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
      {listPage && Array.isArray(listPage) && listPage.length > 0 ? (
        <div className={dropdownClassName}>
          {listPage.map((page, index) => {
            return page.url ? (
              <NavLink
                className="block px-4 py-4 hover:text-orange-500 bg-white border-1 border-line-border"
                key={index}
                to={page.url}
              >
                {page.pageName ?? undefined}
              </NavLink>
            ) : (
              <Link
                className="block px-4 py-4 hover:text-orange-500 bg-white border-1 border-line-border"
                key={index}
                onClick={page.onClick ?? undefined}
              >
                {page.pageName ?? undefined}
              </Link>
            );
          })}
        </div>
      ) : undefined}
    </div>
  );
};

export default Dropdow;
