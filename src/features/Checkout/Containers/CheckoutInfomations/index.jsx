import React from "react";
import { Logo, Breadcrumbs } from "../../../../components";

const CheckoutInfomations = () => {
  const BreadcrumbsList = [
    {
      url: "/carts",
      name: "Giỏ hàng",
    },
    {
      url: "/checkout",
      name: "Thanh toán",
    },
  ];

  return (
    <div>
      <div className="max-w-64">
        <Logo />
      </div>
      <div className="my-4">
        <Breadcrumbs breadcrumbs={BreadcrumbsList} />
      </div>
    </div>
  );
};

export default CheckoutInfomations;
