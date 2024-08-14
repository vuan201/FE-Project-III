import React from "react";
import CheckoutInfomations from "./Containers/CheckoutInfomations";
import CheckoutBillPreview from "./Containers/CheckoutBillPreview";
import { Container } from "@mui/material";

const Checkout = () => {
  return (
    <div className="min-h-page">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="col-span-2">
            <CheckoutInfomations />
          </div>
          <div className="col-span-2">
            <CheckoutBillPreview />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Checkout;
