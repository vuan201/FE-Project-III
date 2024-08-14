import React from "react";
import CheckoutInfomationsHeader from "../../Components/CheckoutInfomationsHeader";
import DeliveryInformation from "../DeliveryInformation";

const CheckoutInfomations = () => {
  return (
    <div>
      <div className="my-4">
        <CheckoutInfomationsHeader />
      </div>
      <div className="my-4">
        <DeliveryInformation />
      </div>
    </div>
  );
};

export default CheckoutInfomations;
