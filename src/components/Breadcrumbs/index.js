import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { FaCaretRight } from "react-icons/fa";

const Breadcrumbs = () => {
  const location = useLocation();
  const breadcrumbs = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="flex">
      <span className="mx-1 my-auto">
        <Link to="/">Home</Link>
      </span>
      {breadcrumbs.map((crumb, index) => {
        const path = `/${breadcrumbs.slice(0, index + 1).join("/")}`;
        return (
          <span key={index} className="flex">
            <span className="mx-1 my-auto">
              <FaCaretRight />
            </span>
            <span key={path} className="mx-1 my-auto">
              <Link to={path}>
                {crumb.charAt(0).toUpperCase() + crumb.slice(1)}
              </Link>
            </span>
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
