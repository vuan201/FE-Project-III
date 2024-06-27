import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import SortList from "../../components/SortList";
import {
  sortList,
  presentValue,
  setPresentValue,
} from "../../../../app/reducers";

import "./Sort.css";
import clsx from "clsx";

const Sort = () => {
  const [showPopover, setShowPopover] = useState(false);
  const dispatch = useDispatch()
  const value = useSelector(presentValue);
  const sorts = useSelector(sortList);

  const className = clsx(
    "sortValue w-[190px] h-[44px] border border-line-border hover:border-black",
    { "border-black": showPopover }
  );

  return (
    <div className={className} onClick={() => setShowPopover(!showPopover)}>
      <button className="flex justify-between items-center h-full w-full p-2">
        <div className="">{value}</div>
        <div className=""></div>
        <div className="">
          <FaAngleDown />
        </div>
      </button>
      <SortList showPopover={showPopover}/>
      
      {/* {showPopover ? (
        <div className="sortItem text-left">
          {sorts.map((sort, index) => (
            <button className="block" key={index} onClick={() => dispatch(setPresentValue(sort))}>{sort}</button>
          ))}
        </div>
      ) : undefined} */}
    </div>
  );
};

export default Sort;
