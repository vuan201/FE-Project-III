import React from "react";
import { IoFilter } from "react-icons/io5";

import "./FilterButton.css";
import clsx from "clsx";

const FilterButton = () => {
  const className = clsx(
    "h-[44px] border z-3",
    "border-line-border hover:border-black",
    "duration-200"
  );

  return (
    <div className={className}>
      <button className="flex gap-4 items-center h-full w-full py-2 px-5">
        <div className="">
          <IoFilter />
        </div>
        <div className="">Bộ lọc</div>
      </button>
    </div>
  );
};

export default FilterButton;
