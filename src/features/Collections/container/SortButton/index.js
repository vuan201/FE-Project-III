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
  const present = useSelector(presentValue);
  const sorts = useSelector(sortList);

  const handleSetPresentValue = (sort) => {
    dispatch(setPresentValue(sort));
  };

  return (
    <Popover value={present.value}>
      <ul className="py-2">
        {sorts.map(({key, value}, index) => (
          <li key={index}>
            <FilterItem
              value={value}
              isActive={key === present.key}
              onClick={() => handleSetPresentValue({key, value})}
            />
          </li>
        ))}
      </ul>
    </Popover>
  );
};

export default SortButton;
