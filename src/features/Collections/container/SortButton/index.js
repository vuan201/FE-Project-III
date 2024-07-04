import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Popover } from "../../../../components";
import { FilterItem } from "../../components";
import {
  presentValue,
  sortList,
  setPresentValue,
} from "../../../../app/reducers";

import "./SortButton.css";

const SortButton = () => {
  const dispatch = useDispatch();
  const value = useSelector(presentValue);
  const sorts = useSelector(sortList);

  const handleSetPresentValue = (value) => {
    dispatch(setPresentValue(value));
  };

  return (
    <Popover value={value}>
      <ul className="py-2">
        {sorts.map((sort, index) => (
          <li key={index}>
            <FilterItem
              value={sort}
              isActive={sort === value}
              onClick={handleSetPresentValue}
            />
          </li>
        ))}
      </ul>
    </Popover>
  );
};

export default SortButton;
