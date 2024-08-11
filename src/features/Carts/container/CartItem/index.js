import React, { memo } from "react";
import { Link } from "react-router-dom";
import { Checked, Image, InputQuantity } from "../../../../components";
import { useDispatch, useSelector } from "react-redux";
import {
  handleMutateOrderItems,
  removeItemToCart,
  selectAuthToken,
  selectOrderItems,
  setOrderQuantity,
  setQuantity,
  updateCartItems,
} from "../../../../app/reducers";
import CartItemPrice from "../../components/CartItemPrice";
import { TfiClose } from "react-icons/tfi";
import { Checkbox } from "@mui/material";

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const token = useSelector(selectAuthToken);

  const { name, imageUrl, slug, sku, price, quantity, color, size } = cartItem;

  const orderItems = useSelector(selectOrderItems);

  const handleUpdateQuantity = (newQuantity) => {
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

    if (token) {
      dispatch(updateCartItems([item]));
    } else {
      dispatch(setQuantity({ sku, quantity: newQuantity }));
    }

    dispatch(setOrderQuantity({ sku, quantity: newQuantity, price }));
  };

  return (
    <div className="grid grid-cols-12 gap-1 my-2 place-items-center">
      <div className="col-span-1">
        {/* <Checked/> */}
        <Checkbox
          checked={orderItems.some((item) => item.sku === sku)}
          onClick={() =>
            dispatch(handleMutateOrderItems({ sku, quantity, price }))
          }
        />
      </div>

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
          setValue={handleUpdateQuantity}
        />
      </div>

      <div className="col-span-1">
        <CartItemPrice price={price * quantity} />
      </div>

      <div
        onClick={() => handleUpdateQuantity(0)}
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
