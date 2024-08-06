import React from "react";
import { Link } from "react-router-dom";
import { Image, InputQuantity } from "../../../../components";
import { priceConvert } from "../../../../utils/priceConvert";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItemToCart,
  selectAuthToken,
  setQuantity,
  updateCartItems,
} from "../../../../app/reducers";
import { TfiClose } from "react-icons/tfi";
const CartItem = ({ cart }) => {
  const dispatch = useDispatch();
  const token = useSelector(selectAuthToken);
  const { name, imageUrl, slug, sku, price, quantity, color, size } = cart;

  const handleSetQuantity = (newQuantity) => {
    if (token) {
      dispatch(
        updateCartItems([
          {
            name,
            imageUrl,
            slug,
            sku,
            price,
            quantity: newQuantity,
            color,
            size,
          },
        ])
      );
      return;
    }
    if (newQuantity === 0) {
      dispatch(removeItemToCart(sku));
    } else {
      dispatch(setQuantity({ sku, quantity: newQuantity }));
    }
  };

  return (
    <div className="grid grid-cols-12 gap-1 my-2 place-items-center">
      <div className="col-span-1"></div>
      <div className="col-span-1 place-self-center h-full">
        <Image data={{ image: imageUrl, name: name }} />
      </div>

      <div className="col-span-5 justify-self-start">
        <div className="flex flex-col gap-2 ">
          <Link
            className="text-black hover:underline hover:text-blue-800 transition"
            to={`/products/${slug}`}
          >
            {name}
          </Link>
          <div>{color}</div>
          <div>{size}</div>
        </div>
      </div>

      <div className="col-span-1">
        <span>{priceConvert(price)}</span>
        <span>₫</span>
      </div>

      <div className="col-span-2">
        <InputQuantity
          limit={99}
          value={quantity}
          setValue={handleSetQuantity}
        />
      </div>

      <div className="col-span-1">
        <span>{priceConvert(price * quantity)}</span>
        <span>₫</span>
      </div>

      <div
        onClick={() => handleSetQuantity(0)}
        className="col-span-1 cursor-pointer hover:text-red-700 hover:bg-slate-200 transition p-2 border rounded-full hover:border-black"
      >
        <TfiClose />
      </div>
    </div>
  );
};

export default CartItem;
