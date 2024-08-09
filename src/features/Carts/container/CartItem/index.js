import React, { memo } from "react";
import { Link } from "react-router-dom";
import { Image, InputQuantity } from "../../../../components";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItemToCart,
  selectAuthToken,
  setQuantity,
  updateCartItems,
} from "../../../../app/reducers";
import CartItemPrice from "../../components/CartItemPrice";
import { TfiClose } from "react-icons/tfi";

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const token = useSelector(selectAuthToken);

  const { name, imageUrl, slug, sku, price, quantity, color, size } = cartItem;

  const handleSetQuantity = (newQuantity) => {
    if (token) {
      const item = {
        name,
        imageUrl,
        slug,
        sku,
        price,
        quantity: newQuantity,
        color,
        size,
      };

      dispatch(updateCartItems([item]));
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

      <div className="col-span-3 justify-self-start">
        <Link
          className="text-black hover:text-blue-800 transition"
          to={`/products/${slug}`}
        >
          <div>{name}</div>
        </Link>
      </div>

      <div className="col-span-1 justify-self-center">
        <div>{color}</div>
      </div>

      <div className="col-span-1 justify-self-center">
        <div>{size}</div>
      </div>

      <div className="col-span-1">
        <CartItemPrice price={price} />
      </div>

      <div className="col-span-2">
        <InputQuantity
          limit={99}
          value={quantity}
          setValue={handleSetQuantity}
        />
      </div>

      <div className="col-span-1">
        <CartItemPrice price={price * quantity} />
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

export default memo(
  CartItem,
  (currentProp, nextProp) =>
    currentProp.cartItem.quantity === nextProp.cartItem.quantity
);
