import React, { useEffect } from "react";
import { BiSolidColor } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Popover } from "../../../../components";
import { FilterItem } from "../../components";
import {
  selectColorsItem,
  selectColorsStatus,
  selectColorsError,
  fetchColors,
  handleFilterColors,
  selectFiltersColors
} from "../../../../app/reducers";

const ColorButton = () => {
  const dispatch = useDispatch();
  const colors = useSelector(selectColorsItem);
  const status = useSelector(selectColorsStatus);
  const error = useSelector(selectColorsError);
  const filtersColors = useSelector(selectFiltersColors)
  // console.log(filtersColors.includes(1));
  useEffect(() => {
    dispatch(fetchColors());
    return () => {};
  }, [dispatch]);

  const handleSetFilterColors = (color) => {
    dispatch(handleFilterColors(color));
  };

  return (
    <Popover Icon={BiSolidColor} value={"Màu sắc"}>
      <ul className="p-2">
        {colors
          ? colors.map((color, index) => (
              <li key={index}>
                <FilterItem
                  value={color.color}
                  isActive={filtersColors.includes(color.color)}
                  onClick={handleSetFilterColors}
                />
              </li>
            ))
          : undefined}
      </ul>
    </Popover>
  );
};

export default ColorButton;
