import React from "react";
import Address from "../Address";
import CheckoutForm from "../CheckoutForm";
const DeliveryInformation = () => {
  return (
    <div>
      <h3 className="text-3xl py-4">Thông tin giao hàng</h3>
      <CheckoutForm/>
      <Address />
    </div>
  );
};

export default DeliveryInformation;
