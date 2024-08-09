import React, { memo, useEffect, useState } from "react";
import { BannerHeadPage, Image } from "../../components";

import CartPayment from "./container/CartPayment";
import ListCartItem from "./container/ListCartItem";

const Carts = () => {
  return (
    <div>
      <BannerHeadPage title={"Giỏ hàng"} />
      <div className="mx-auto my-10 px-12">
        <div className="w-full m-auto max-w-container">
          <div className="grid grid-cols-4 gap-2">
            <div className="col-span-4 lg:col-span-3">
              <ListCartItem />
            </div>

            <div className="col-span-4 md:col-span-1">
              <CartPayment />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Carts);
