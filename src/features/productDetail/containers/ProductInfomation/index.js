import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setSelectorColor,
  setSelectorSize,
  selectorColor,
  selectorOption,
  selectorSize,
  setSelectorOption,
  selectAuthToken,
  selectCartsItem,
  addItemToCart,
  updateItemCarts,
} from "../../../../app/reducers";
import { ImageItem, SizeItem, ListPolicy } from "../../components";
import { Button, InputQuantity } from "../../../../components";
import { FaRegHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { priceConvert } from "../../../../utils/priceConvert";

const ProductInfomation = ({ data }) => {
  const { name, description, brand, categories, options, images } = data;

  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const token = useSelector(selectAuthToken);
  const cartItems = useSelector(selectCartsItem);

  const selectOption = useSelector(selectorOption);

  const selectColor = useSelector(selectorColor);
  const selectSize = useSelector(selectorSize);

  const newImages = Object.groupBy(images, ({ color }) => color);
  const optionsByColor = Object.groupBy(options, ({ color }) => color);
  const optionsBySize = Object.groupBy(options, ({ size }) => size);

  useEffect(() => {
    if (selectColor === "" && selectSize === "" && options[0]) {
      dispatch(setSelectorOption(options[0]));
      dispatch(setSelectorColor(options[0].color));
      dispatch(setSelectorSize(options[0].size));
    }
    if (quantity > selectOption.quantity) setQuantity(selectOption.quantity);
  }, [selectColor, selectSize]);

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

  const handleSetSelectorColor = (color) => {
    dispatch(setSelectorColor(color));
    if (selectColor !== "" && selectSize !== "") {
      const newOptionSelector = options.find(
        (option) => option.color === color && option.size === selectSize
      );
      if (newOptionSelector) dispatch(setSelectorOption(newOptionSelector));
      else {
        const newOptionSelector = options.find(
          (option) => option.color === color
        );
        dispatch(setSelectorOption(newOptionSelector));
        dispatch(setSelectorSize(newOptionSelector.size));
      }
    }
  };

  const handleSetSelectorSize = (size) => {
    dispatch(setSelectorSize(size));
    if (selectColor !== "" && selectSize !== "") {
      const newOptionSelector = options.find(
        (option) => option.color === selectColor && option.size === size
      );
      if (newOptionSelector) dispatch(setSelectorOption(newOptionSelector));
      else {
        const newOptionSelector = options.find(
          (option) => option.size === size
        );
        dispatch(setSelectorOption(newOptionSelector));
        dispatch(setSelectorColor(newOptionSelector.color));
      }
    }
  };

  const handleAddToCart = () => {
    dispatch(addItemToCart({ sku: selectOption.sku, quantity: quantity }));
    if (token) dispatch(updateItemCarts(cartItems));
  };


  return (
    <div>
      <div className="mb-5 ">
        <h2 className="font-normal text-3xl">{name}</h2>
      </div>
      <div className="mb-5">
        <span className="text-red-600 text-3xl">
          {priceConvert(selectOption.price)}
        </span>
      </div>
      <div className="mb-5">
        <span>Tình trạng : </span>
        <span className="font-medium">
          {selectColor !== "" && selectSize !== "" ? (
            selectOption.quantity > 0 ? (
              <span className="text-blue-700">
                Còn hàng ({selectOption.quantity})
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
        <InputQuantity
          limit={selectOption.quantity}
          value={quantity}
          setValue={setQuantity}
        />
      </div>
      <div className="mb-5 flex gap-1 items-stretch">
        <div className="basis-10/12">
          <Button black afterAnimation isFull>
            Mua ngay
          </Button>
        </div>
        <div className="basis-1/12 flex justify-center items-center text-xl">
          <Button white>
            <FaRegHeart />
          </Button>
        </div>
        <div
          className="basis-1/12 flex justify-center items-center text-xl"
          onClick={() => handleAddToCart()}
        >
          <Button white>
            <FaCartPlus />
          </Button>
        </div>
      </div>
      <div className="mb-5">
        <ListPolicy />
      </div>
    </div>
  );
};

export default ProductInfomation;
