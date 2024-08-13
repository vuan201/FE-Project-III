import React from "react";
import CheckoutInfomations from "./Containers/CheckoutInfomations";
import CheckoutBillPreview from "./Containers/CheckoutBillPreview";

const Checkout = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="col-span-2">
        <CheckoutInfomations />
      </div>
      <div className="col-span-2">
        <CheckoutBillPreview />
      </div>
    </div>
  );
};

export default Checkout;
