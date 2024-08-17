import React from "react";
import { Input } from "../../../../components";
import { useDispatch, useSelector } from "react-redux";
import {
  selectOrderAddress,
  selectOrderFullName,
  selectOrderPhoneNumber,
  setFullName,
  setOrderSpecificAddress,
  setPhoneNumber,
} from "../../../../app/reducers";

const CheckoutForm = () => {
  const dispatch = useDispatch();
  const phoneNumber = useSelector(selectOrderPhoneNumber);
  const orderAddress = useSelector(selectOrderAddress);
  const orderFullName = useSelector(selectOrderFullName)
  
  return (
    <div>
      <div className="flex gap-4">
        <Input
          value={phoneNumber}
          onChange={(e) => dispatch(setPhoneNumber(e.target.value))}
        >
          Số điện thoại
        </Input>
        <Input
          value={orderFullName}
          onChange={(e) => dispatch(setFullName(e.target.value))}
        >
          Tên người nhận
        </Input>
      </div>
      <div>
        <Input
          value={orderAddress.specificAddress}
          onChange={(e) => dispatch(setOrderSpecificAddress(e.target.value))}
        >
          Chi tiết địa chỉ giao hàng
        </Input>
      </div>
    </div>
  );
};

export default CheckoutForm;
