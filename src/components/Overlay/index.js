import clsx from "clsx";
import React from "react";
import "./Overlay.css";

const Overlay = ({ isOverlay }) => {
  const className = clsx(
    "overlay opacity-0 translate-x-[-100%] ",
    "fixed top-0 bottom-0 left-0 right-0",
    {
      "translate-x-0 opacity-100": isOverlay,
    }
  );
  return <div className={className}></div>;
};

export default Overlay;
