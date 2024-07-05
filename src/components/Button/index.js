import React, { memo } from "react";
import clsx from "clsx";
import "./Button.css";

const Button = (prop) => {
  const { children, onClick, type } = prop;
  const { afterAnimation, black, white, sky } = prop;

  const className = clsx("button", {
    "bg-black text-white": black,
    "bg-white text-black border border-black": white,
    "bg-sky-100 text-black hover:border hover:border-sky-100 hover:bg-white":sky,
    "afterAnimation overflow-hidden": afterAnimation,
  });
  return (
    <button className={className} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default memo(Button);
