import React from "react";
import { priceConvert } from "../../../../utils/priceConvert";
const ProductPrice = ({ price }) => {
  return (
    <span className="text-red-600 text-3xl">{priceConvert(price)} VND</span>
  );
};

export default ProductPrice;
