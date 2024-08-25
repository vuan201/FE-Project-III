import React, { memo } from "react";
import { BannerHeadPage, Container } from "../../components";

import CartPayment from "./container/CartPayment";
import ListCartItem from "./container/ListCartItem";

const Carts = () => {
  return (
    <div className="min-h-page">
      <div className="mb-10">
        <BannerHeadPage title={"Giỏ hàng"} />
      </div>
      <Container>
        <ListCartItem />
        <div className="sticky bottom-0 w-full bg-gray-50">
          <CartPayment />
        </div>
      </Container>
    </div>
  );
};

export default memo(Carts);
