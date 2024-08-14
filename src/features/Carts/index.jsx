import React, { memo, useEffect, useState } from "react";
import { BannerHeadPage, Image } from "../../components";

import CartPayment from "./container/CartPayment";
import ListCartItem from "./container/ListCartItem";
import { Container } from "@mui/material";

const Carts = () => {
  return (
    <div>
      <BannerHeadPage title={"Giỏ hàng"} />
      <Container>
        <ListCartItem />
        <div className="sticky bottom-0 w-full bg-white">
          <CartPayment />
        </div>
      </Container>
    </div>
  );
};

export default memo(Carts);
