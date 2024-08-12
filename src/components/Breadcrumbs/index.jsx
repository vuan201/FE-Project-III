import React from "react";
import { Link } from "react-router-dom";
import { FaCaretRight } from "react-icons/fa";

const Breadcrumbs = ({ breadcrumbs }) => {
  return (
    <nav className="flex">
      <span className="mx-1 my-auto">
        <Link to="/">Trang chủ</Link>
      </span>
      <span className="flex">
        {breadcrumbs.length > 1 ? (
          breadcrumbs.map((breadcrumb) => (
            <>
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
            </>
          ))
        ) : (
          <>
            <span className="mx-1 my-auto">
              <FaCaretRight />
            </span>
            <span className="mx-1 my-auto">
              {breadcrumbs[0].url ? (
                <Link to={breadcrumbs[0].url}>{breadcrumbs[0].name}</Link>
              ) : (
                <span>{breadcrumbs[0].name}</span>
              )}
            </span>
          </>
        )}
      </span>
    </nav>
  );
};

export default Breadcrumbs;
