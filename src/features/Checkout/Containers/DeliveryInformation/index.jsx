import React from "react";
import Address from "../Address";
import CheckoutForm from "../CheckoutForm";
import PaymentMethod from "../PaymentMethod";
const DeliveryInformation = () => {
  return (
    <div>
      <h3 className="text-3xl py-4">Thông tin giao hàng</h3>
      <CheckoutForm/>
      <Address />
      <h3 className="text-3xl py-4">Phương thức thanh toán</h3>
      <PaymentMethod/>
    </div>
  );
};

export default DeliveryInformation;
