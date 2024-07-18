import clsx from "clsx";
import React from "react";

const SizeItem = ({ size, isValid, isSelector, onClick }) => {
  const sizeItemClassName = clsx(
    "block p-2 hover:bg-black hover:text-white transition border boder-black",
    {
      "bg-white text-black": !isSelector,
      "bg-black text-white": isSelector,
      "opacity-100 cursor-pointer": isValid,
      "opacity-50 bg-slate-300": !isValid,
    }
  );
  return (
    <div
      className={sizeItemClassName}
      onClick={() => onClick(size)}
    >
      <span>{size}</span>
    </div>
  );
};

export default SizeItem;
