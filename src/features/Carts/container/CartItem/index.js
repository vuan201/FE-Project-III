import React from "react";
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
import CartItemInfomation from "../../components/CartItemInfomation";
import CartRemoveIcon from "../../components/CartRemoveIcon";
const CartItem = ({ cart }) => {
  const dispatch = useDispatch();
  const token = useSelector(selectAuthToken);

  const { name, imageUrl, slug, sku, price, quantity, color, size } = cart;

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

      <div className="col-span-5 justify-self-start">
        <div className="flex flex-col gap-2 ">
          <Link
            className="text-black hover:underline hover:text-blue-800 transition"
            to={`/products/${slug}`}
          >
            <CartItemInfomation>{name}</CartItemInfomation>
          </Link>
          <CartItemInfomation>{color}</CartItemInfomation>
          <CartItemInfomation>{size}</CartItemInfomation>
        </div>
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

      <CartRemoveIcon onClick={() => handleSetQuantity(0)} />
    </div>
  );
};

export default CartItem;
