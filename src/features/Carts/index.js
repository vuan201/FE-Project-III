import React, { useEffect, useState } from "react";
import { BannerHeadPage, Image } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCarts,
  selectAuthToken,
  selectCartsError,
  selectCartsItem,
  selectCartsStatus,
  setCarts,
  updateCartItems,
} from "../../app/reducers";
import { priceConvert } from "../../utils/priceConvert";
import { Link } from "react-router-dom";
import CartItem from "./container/CartItem";

const Carts = () => {
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
    <div>
      <BannerHeadPage title={"Giỏ hàng"} />
      <div className="mx-auto my-10 px-12">
        <div className="w-full m-auto max-w-container">
          <div className="grid grid-cols-4 gap-2">
            <ul className="col-span-4 lg:col-span-3 ">
              {carts && Array.isArray(carts)
                ? carts.map((cart, index) => (
                    <li key={index}>
                      <CartItem cart={cart} />
                    </li>
                  ))
                : undefined}
            </ul>
            <div className="col-span-4 md:col-span-1">khung thanh toán</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carts;
