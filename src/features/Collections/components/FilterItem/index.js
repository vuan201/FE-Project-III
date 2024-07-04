import React from "react";
import './FilterItem.css'

const FilterItem = ({ onClick, value, isActive }) => {
  return (
    <button
      className={isActive === true ? "filterItemActive" : "filterItem"}
      onClick={() => onClick(value)}
    >
      {value}
    </button>
  );
};

export default FilterItem;
