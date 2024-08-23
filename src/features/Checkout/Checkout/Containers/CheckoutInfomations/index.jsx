import React, { useState, useEffect } from "react";
import CheckoutInfomationsHeader from "../../Components/CheckoutInfomationsHeader";
import Address from "../Address";
import CheckoutForm from "../CheckoutForm";
import PaymentMethod from "../PaymentMethod";
import { Button, CustomSnackbar } from "../../../../../components";
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
import { useDispatch, useSelector } from "react-redux";
import { VN_PAY } from "../../../../../config";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const CheckoutInfomations = () => {
  const dispatch = useDispatch();
  const orderItem = useSelector(selectOrderItems);
  const orderAddress = useSelector(selectOrderAddress);
  const orderPaymentMethod = useSelector(selectOrderPaymentMethod);
  const orderFullName = useSelector(selectOrderFullName);
  const orderPhoneNumber = useSelector(selectOrderPhoneNumber);
  const orderVoucher = useSelector(selectOrderVoucher);
  const orderAddressId = useSelector(selectOrderAddressId);
  const vnPayResult = useSelector(selectOrderVnPayResult);

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  useEffect(() => {
    if (
      orderPaymentMethod.name === VN_PAY &&
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

    if (
      isOrderValid &&
      (isAddressComplete || orderAddressId !== 0 || orderAddressId !== "0")
    ) {
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

      // Hiển thị thông báo thành công
      setSnackbarMessage("Đơn hàng đã được hoàn tất thành công!");
      setSnackbarSeverity("success");
      setOpenSnackbar(true);
    } else {
      // Hiển thị thông báo lỗi
      setSnackbarMessage("Vui lòng kiểm tra lại thông tin đơn hàng!");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <div>
      <div className="my-4">{/* <CheckoutInfomationsHeader /> */}</div>
      <div className="my-4 flex flex-col gap-4">
        <h3 className="text-3xl">Thông tin giao hàng</h3>
        <Address />
        <CheckoutForm />
        <h3 className="text-3xl">Phương thức thanh toán</h3>
        <PaymentMethod />
        <div className="my-4">
          <Button isFull black afterAnimation onClick={(e) => handleOrder(e)}>
            Hoàn tất đơn hàng
          </Button>
        </div>
      </div>

      {/* Snackbar */}
      <CustomSnackbar
        openSnackbar={openSnackbar}
        handleCloseSnackbar={handleCloseSnackbar}
        snackbarSeverity={snackbarSeverity}
      >
        {snackbarMessage}
      </CustomSnackbar>
    </div>
  );
};

export default CheckoutInfomations;
