import React, { memo, useEffect, useState } from "react";
import { BannerHeadPage, Image } from "../../components";

import CartPayment from "./container/CartPayment";
import ListCartItem from "./container/ListCartItem";

const Carts = () => {
  return (
    <div>
      <BannerHeadPage title={"Giỏ hàng"} />
      <div className="mx-auto my-10">
        <div className="w-full m-auto max-w-container">
          <ListCartItem />
          <div className="sticky bottom-0 w-full bg-white">
            <CartPayment />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Carts);
