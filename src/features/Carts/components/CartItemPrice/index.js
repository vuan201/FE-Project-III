import React from "react";
import { priceConvert } from "../../../../utils/priceConvert";
const CartItemPrice = ({ price }) => {
  return (
    <div>
      <span>{priceConvert(price)}</span>
      <span>₫</span>
    </div>
  );
};

export default CartItemPrice;
