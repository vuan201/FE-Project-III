import React from "react";
import { Link } from "react-router-dom";
import { FaCaretRight } from "react-icons/fa";

const Breadcrumbs = ({ breadcrumbs }) => {
  return (
    <nav className="flex my-2">
      <span className="mx-1 my-auto">
        <Link to="/">Trang chủ</Link>
      </span>
      <span className="flex">
        {breadcrumbs.map((breadcrumb) => (
          <div className="flex" key={breadcrumb.name}>
            <span className="mx-1 my-auto">
              <FaCaretRight />
            </span>
            <span className="mx-1 my-auto">
              {breadcrumb.url ? (
                <Link to={breadcrumb.url}>{breadcrumb.name}</Link>
              ) : (
                <span>{breadcrumb.name}</span>
              )}
            </span>
          </div>
        ))}
      </span>
    </nav>
  );
};

export default Breadcrumbs;
