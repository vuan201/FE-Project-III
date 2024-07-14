import React, { useState } from "react";
import {
  selectQuantity,
  increase,
  decrement,
  setQuantity,
  resetQuantity,
} from "../../app/reducers";
import { useDispatch, useSelector } from "react-redux";

import { IoAddCircleOutline } from "react-icons/io5";
import clsx from "clsx";

const InputQuantity = () => {
  const dispatch = useDispatch()
  const quantity = useSelector(selectQuantity)

  const spanClassName = clsx('bg-slate-100 text-center w-10 cursor-pointer border border-slate-300 hover:border-black transition')

  return (
    <form className="mb-5 flex">
      <span className={spanClassName} onClick={() => dispatch(decrement())}>-</span>
      <input
      className='w-auto max-w-16 border text-center px-2'
        value={quantity}
        onChange={(e) => dispatch(setQuantity(e.target.value))}
      />
      <span className={spanClassName} onClick={() => dispatch(increase())}>+</span>
    </form>
  );
};

export default InputQuantity;
