import React, { useState } from "react";
import { IoFilter } from "react-icons/io5";
import "./Filters.css";
import clsx from "clsx";
import { FilterButton } from "../../components";
import {ColorButton, SizeButton, PriceButton} from '../'
const Filters = () => {
  const [isOpenFilter, setIsOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setIsOpenFilter(!isOpenFilter);
  };

  return (
    <div className="flex flex-row gap-4">
      <FilterButton>
        <div>
          <IoFilter />
        </div>
      </FilterButton>
      <ColorButton/>
      <SizeButton/>
      <PriceButton/>
    </div>
  );
};

export default Filters;
