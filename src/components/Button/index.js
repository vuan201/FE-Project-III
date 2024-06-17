import React, { memo } from "react";
import clsx from "clsx";
import "./Button.css";

const Button = (prop) => {
  const { children, onClick, type } = prop;

  return (
    <button className={'button'} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default memo(Button);
