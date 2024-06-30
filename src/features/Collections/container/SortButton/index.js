import React, { useRef, useState, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import {
  presentValue,
  sortList,
  setPresentValue,
  resetPresentValue,
} from "../../../../app/reducers";

import "./SortButton.css";
import clsx from "clsx";

const SortButton = () => {
  const dispatch = useDispatch();
  const [showPopover, setShowPopover] = useState(false);
  const value = useSelector(presentValue);
  const sorts = useSelector(sortList);

  const ref = useRef();

  const className = clsx("sortValue w-[190px] h-[44px] border z-3 ", {
    "border-line-border hover:border-black": !showPopover,
    "border-black": showPopover,
  });

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowPopover(false);
      }
    }

    if (showPopover) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      if (showPopover) {
        document.removeEventListener("mousedown", handleClickOutside);
      }
    };
  }, [showPopover]);

  return (
    <div
      className={className}
      ref={ref}
      onClick={() => setShowPopover(!showPopover)}
    >
      <button className="flex justify-between items-center h-full w-full py-2 px-5">
        <div className="">{value}</div>
        <div className=""></div>
        <div className="">
          <FaAngleDown />
        </div>
      </button>
      {showPopover ? (
        <div className="py-2">
          {sorts.map((sort, index) => (
            <button
              className={sort === value ? "sortItemActive" : "sortItem"}
              key={index}
              onClick={() => dispatch(setPresentValue(sort))}
            >
              {sort}
            </button>
          ))}
        </div>
      ) : undefined}
    </div>
  );
};

export default SortButton;
