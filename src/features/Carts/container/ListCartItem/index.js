import React, { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAuthToken,
  selectCartsError,
  selectCartsItem,
  selectCartsStatus,
  updateCartItems,
} from "../../../../app/reducers";
import CartItem from "../CartItem";

const ListCartItem = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectAuthToken);
  const carts = useSelector(selectCartsItem);
  const cartsStatus = useSelector(selectCartsStatus);
  const cartsError = useSelector(selectCartsError);

  const [async, setAsync] = useState(true);

  useEffect(() => {
    if (async && token) {
      dispatch(updateCartItems(carts));
      setAsync(false);
    }
  }, [async]);

  return (
    <ul>
      {carts && Array.isArray(carts) ? (
        <>
          <div className="grid grid-cols-12 gap-1 justify-items-center ">
            <div className="col-span-1"></div>
            <div className="col-span-4 font-medium">Tên sản phẩm</div>
            <div className="col-span-1 font-medium">Màu sắc</div>
            <div className="col-span-1 font-medium">kích thước</div>
            <div className="col-span-1 font-medium">Đơn giá</div>
            <div className="col-span-2 font-medium">Số lượng</div>
            <div className="col-span-1 font-medium">Tổng giá</div>
          </div>
          {carts.map((cartItem, index) => (
            <li key={index}>
              <CartItem cartItem={cartItem} />
            </li>
          ))}
        </>
      ) : undefined}
    </ul>
  );
};

export default ListCartItem;
