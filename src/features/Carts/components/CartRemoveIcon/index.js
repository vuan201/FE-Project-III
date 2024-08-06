import React from "react";
import { TfiClose } from "react-icons/tfi";

const CartRemoveIcon = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="col-span-1 cursor-pointer hover:text-red-700 hover:bg-slate-200 transition p-2 border rounded-full hover:border-black"
    >
      <TfiClose />
    </div>
  );
};

export default CartRemoveIcon;
