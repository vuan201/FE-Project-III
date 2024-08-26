import React, { useEffect } from "react";
import CheckoutInfomations from "./Containers/CheckoutInfomations";
import CheckoutBillPreview from "./Containers/CheckoutBillPreview";
import { Container } from "@mui/material";
import { useDispatch } from "react-redux";
import { resetOrder } from "../../../app/reducers";
import CheckoutInfomationsHeader from "./Components/CheckoutInfomationsHeader";

const Checkout = () => {
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   return () => dispatch(resetOrder())
  // },[])

  return (
    <div className="my-8">
      <Container>
        <CheckoutInfomationsHeader/>
        <div className="grid grid-cols-2 lg:grid-cols-4 space-x-4">
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
