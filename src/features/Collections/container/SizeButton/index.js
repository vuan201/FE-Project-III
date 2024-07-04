import React from "react";
import { FilterButton } from "../../components";
import { IoIosResize } from "react-icons/io";

const SizeButton = () => {
  return (
    <FilterButton>
      <div>
        <IoIosResize />
      </div>
      <span>Kích thước</span>
    </FilterButton>
  );
};

export default SizeButton;
