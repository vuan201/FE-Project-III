import clsx from "clsx";
import React from "react";
import "./Overlay.css";

const Overlay = ({ isOverlay, onClick }) => {

  const className = clsx(
    "overlay w-full h-full",
    "fixed top-0 bottom-0 left-0 right-0",
    {
      "z-0 invisible opacity-0": !isOverlay,
      "z-3 visible opacity-100": isOverlay,
    }
  );
  return <div className={className} onClick={() => onClick()}></div>;
};

export default Overlay;
