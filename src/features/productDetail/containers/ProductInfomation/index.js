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
import { Button, InputQuantity } from "../../../../components";

import { FaRegHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";

const ProductInfomation = ({ data }) => {
  const { name, description, price, brand, categories, options, images } = data;

  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const selectOption = useSelector(selectorOption);

  const selectColor = useSelector(selectorColor);
  const selectSize = useSelector(selectorSize);

  const newImages = Object.groupBy(images, ({ color }) => color);
  const optionsByColor = Object.groupBy(options, ({ color }) => color);
  const optionsBySize = Object.groupBy(options, ({ size }) => size);

  useEffect(() => {
    if (selectColor !== "" && selectSize !== "") {
      const newOptionSelector = options.find(
        (option) => option.color === selectColor && option.size === selectSize
      );
      dispatch(setSelectorOption(newOptionSelector));
    } else {
      dispatch(setSelectorOption({}));
    }
  }, [selectColor, selectSize]);

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
          {selectColor !== "" && selectSize !== "" ? (
            selectOption.quantity > 0 ? (
              <span className="text-blue-700">
                Còn hàng (${selectOption.quantity})
              </span>
            ) : (
              <span className="text-red-500">Hết hàng</span>
            )
          ) : (
            <span className="text-blue-700">Còn hàng</span>
          )}
        </span>
      </div>
      <div className="mb-5">
        <span>Màu sắc: </span>
        <span className="font-bold">{selectColor}</span>
      </div>
      <ul className="mb-5 flex">
        {Object.keys(newImages).map((key) => (
          <li key={key} className="mr-1">
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
      <div className="mb-5">
        <span>Kích thước: </span>
      </div>
      <ul className="mb-5 flex">
        {Object.keys(optionsBySize).map((key) => (
          <li key={key} className="mr-1">
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
      <div className="mb-5">
        <span>Số lượng: </span>
      </div>
      <div className="mb-5 ">
        <InputQuantity />
      </div>
      <div className="mb-5 flex gap-1 items-stretch">
        <div className="basis-10/12">
          <Button black afterAnimation isFull>
            Mua ngay
          </Button>
        </div>
        <div className="basis-1/12 flex justify-center items-center text-xl">
          <Button white className={""}>
            <FaRegHeart />
          </Button>
        </div>
        <div className="basis-1/12 flex justify-center items-center text-xl">
          <Button white>
            <FaCartPlus />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfomation;
