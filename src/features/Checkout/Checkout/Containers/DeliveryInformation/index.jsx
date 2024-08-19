import React, { useEffect } from "react";
import CheckoutForm from "../CheckoutForm";
import PaymentMethod from "../PaymentMethod";
import Address from "../Address";
import { Button } from "../../../../../components";
import { useDispatch, useSelector } from "react-redux";
import {
  addOrders,
  selectOrderAddress,
  selectOrderAddressId,
  selectOrderFullName,
  selectOrderItems,
  selectOrderPaymentMethod,
  selectOrderPhoneNumber,
  selectOrderVnPayResult,
  selectOrderVoucher,
} from "../../../../../app/reducers";
const DeliveryInformation = () => {
  const dispatch = useDispatch();
  const orderItem = useSelector(selectOrderItems);
  const orderAddress = useSelector(selectOrderAddress);
  const orderPaymentMethod = useSelector(selectOrderPaymentMethod);
  const orderFullName = useSelector(selectOrderFullName);
  const orderPhoneNumber = useSelector(selectOrderPhoneNumber);
  const orderVoucher = useSelector(selectOrderVoucher);
  const orderAddressId = useSelector(selectOrderAddressId);

  const vnPayResult = useSelector(selectOrderVnPayResult);

  useEffect(() => {
    if (
      orderPaymentMethod.name === "vnpay" &&
      vnPayResult.StatusCode === "307"
    ) {
      window.location.href = vnPayResult.PaymentUrl;
    }
  }, [vnPayResult]);

  const handleOrder = (e) => {
    e.preventDefault();

    // Kiểm tra điều kiện chung
    const isOrderValid =
      orderItem.length > 0 && orderFullName !== "" && orderPhoneNumber !== "";

    // Kiểm tra điều kiện có sử dụng addressId hay không
    const isAddressComplete =
      orderAddress.city !== "" &&
      orderAddress.district !== "" &&
      orderAddress.ward !== "" &&
      orderAddress.specificAddress !== "";

    if (isOrderValid && (isAddressComplete || orderAddressId !== "0")) {
      const order = {
        items: orderItem,
        paymentMethod: orderPaymentMethod,
        voucher: orderVoucher,
        receiverName: orderFullName,
        phoneNumber: orderPhoneNumber,
        ...(isAddressComplete
          ? { address: orderAddress }
          : { addressId: orderAddressId }),
      };
      dispatch(addOrders(order));
    }
  };

  return (
    <div>
      <h3 className="text-3xl py-4">Thông tin giao hàng</h3>
      <CheckoutForm />
      <Address />
      <h3 className="text-3xl py-4">Phương thức thanh toán</h3>
      <PaymentMethod />
      <div className="my-4">
        <Button isFull black afterAnimation onClick={(e) => handleOrder(e)}>
          Hoàn tất đơn hàng
        </Button>
      </div>
    </div>
  );
};

export default DeliveryInformation;
