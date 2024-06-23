import React, { memo } from "react";
import clsx from "clsx";
import "./Button.css";

const Button = (prop) => {
  const { children, onClick, type } = prop;

  const className = clsx("button", {
    "afterAnimation overflow-hidden": prop.afterAnimation,
  });
  return (
    <button className={className} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default memo(Button);
