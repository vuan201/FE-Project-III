import React from "react";
import { IoIosResize } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  handleFilterSizes,
  selectFiltersSizes,
  selectSizes,
} from "../../../../app/reducers";
import { Popover } from "../../../../components";
import { FilterItem } from "../../components";

const SizeButton = () => {
  const dispatch = useDispatch();
  const sizes = useSelector(selectSizes);
  const filterSize = useSelector(selectFiltersSizes);

  const handleSetSize = (size) => {
    dispatch(handleFilterSizes(size));
  };

  return (
    <Popover Icon={IoIosResize} value={"Kích thước"}>
      <ul className="overflow-y-auto max-h-56 pt-2 grid grid-cols-2 ">
        {sizes
          ? sizes.map((size, index) => (
              <li key={index}>
                <FilterItem
                  value={size}
                  isActive={filterSize.includes(size)}
                  onClick={handleSetSize}
                />
              </li>
            ))
          : undefined}
      </ul>
    </Popover>
  );
};

export default SizeButton;
