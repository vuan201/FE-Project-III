import React, { useEffect, useState } from "react";
import { ImageItem, SizeItem } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import {
  handleSelectorColor,
  handleSelectorSize,
  selectorColor,
  selectorOption,
  selectorSize,
  setSelectorOption,
} from "../../../../app/reducers";
const ProductInfomation = ({ data }) => {
  const { name, description, price, brand, categories, options, images } = data;

  const dispatch = useDispatch();
  const selectOption = useSelector(selectorOption);

  const selectColor = useSelector(selectorColor);
  const selectSize = useSelector(selectorSize);

  const newImages = Object.groupBy(images, ({ color }) => color);
  const optionsByColor = Object.groupBy(options, ({ color }) => color);
  const optionsBySize = Object.groupBy(options, ({ size }) => size);

  const handleOption = (option) => {
    dispatch(setSelectorOption(option));
  };

  const handleSetSelectorColor = (color) => {
    dispatch(handleSelectorColor(color));
  };

  const handleSetSelectorSize = (size) => {
    dispatch(handleSelectorSize(size));
  };

  const isColorValid = (color) => {
    return selectSize !== ""
      ? optionsBySize[selectSize].some((option) => {
          return option.color === color;
        })
      : true;
  };
  const isSizeValid = (size) => {
    return selectColor !== ""
      ? optionsByColor[selectColor].some((option) => {
          return option.size === size;
        })
      : true;
  };
  return (
    <div>
      <div className="mb-5 ">
        <h2 className="font-normal text-3xl">{name}</h2>
      </div>
      <div className="mb-5">
        <span className="text-red-600 text-3xl">{price}</span>
      </div>
      <div className="mb-5">
        <span>Tình trạng : </span>
        <span className="font-medium">
          {selectOption.quantity > 0 ? (
            <span className="text-blue-700">
              Còn hàng (${selectOption.quantity})
            </span>
          ) : (
            <span className="text-red-500">Hết hàng</span>
          )}
        </span>
      </div>
      <div className="mb-5">
        <span>Màu sắc: </span>
        <span className="font-bold">{selectOption.color}</span>
      </div>
      <ul className="mb-5 flex">
        {Object.keys(newImages).map((key) => (
          <li key={key} className='mr-1'>
            <ImageItem
              image={newImages[key][0]}
              // isValid={isColorValid(selectSize)}
              isValid={isColorValid(key)}
              isSelector={key === selectColor}
              onClick={handleSetSelectorColor}
            />
          </li>
        ))}
      </ul>
      <ul className="mb-5 flex">
        {Object.keys(optionsBySize).map((key) => (
          <li key={key} className='mr-1'>
            <SizeItem
              size={key}
              // isValid={isSizeValid(selectColor)}
              isValid={isSizeValid(key)}
              isSelector={key.toString() === selectSize}
              onClick={handleSetSelectorSize}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductInfomation;
