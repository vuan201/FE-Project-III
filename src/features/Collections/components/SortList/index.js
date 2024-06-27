import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  sortList,
  presentValue,
  setPresentValue,
} from "../../../../app/reducers";

const SortList = ({showPopover}) => {
  
  const dispatch = useDispatch();
  const value = useSelector(presentValue);
  const sorts = useSelector(sortList);

  return (
    <>
      {showPopover ? (
        <div className="sortItem text-left">
          {sorts.map((sort, index) => (
            <button
              className="block"
              key={index}
              onClick={() => dispatch(setPresentValue(sort))}
            >
              {sort}
            </button>
          ))}
        </div>
      ) : undefined}
    </>
  );
};

export default SortList;
