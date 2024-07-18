import React, { useState } from "react";
import {
  selectQuantity,
  increase,
  decrement,
  setQuantity,
  resetQuantity,
} from "../../app/reducers";
import { useDispatch, useSelector } from "react-redux";

import { BsPlusLg } from "react-icons/bs";
import { FiMinus } from "react-icons/fi";
import clsx from "clsx";

const InputQuantity = ({limit}) => {
  const dispatch = useDispatch()
  const quantity = useSelector(selectQuantity)

  const spanClassName = clsx('grid justify-items-center content-center bg-slate-100 w-10 cursor-pointer border border-slate-300 hover:border-black transition hover:text-red-600')

  return (
    <form className="flex justify-items-stretch">
      <span className={spanClassName} onClick={() => dispatch(decrement())}><FiMinus/></span>
      <input
      className='w-auto max-w-16 border text-center px-2 focus:outline-none'
        value={quantity}
        onChange={(e) => dispatch(setQuantity({value:e.target.value, limit}))}
      />
      <span className={spanClassName} onClick={() => dispatch(increase())}><BsPlusLg/></span>
    </form>
  );
};

export default InputQuantity;
