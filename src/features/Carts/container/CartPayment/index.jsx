import React, { memo } from "react";
import { useSelector } from "react-redux";
import { selectAuthToken, selectOrderItems } from "../../../../app/reducers";
import { priceConvert } from "../../../../utils/priceConvert";
import { Button } from "../../../../components";
import { useNavigate } from "react-router";

const CartPayment = () => {
  const navigate = useNavigate();
  const orderList = useSelector(selectOrderItems);
  const token = useSelector(selectAuthToken);

  const totalPrice = orderList.reduce(
    (total, { price, quantity }) => price * quantity + total,
    0
  );

  const handleGoToCheckout = () => {
    if (token) navigate("/order");
  };

  return (
    <div className="mx-8 py-2 flex justify-between gap-2">
      <div className="flex gap-4 text-xl items-center">
        <span className="cursor-pointer border p-2 hover:bg-slate-100 transition">
          Chọn tất cả
        </span>
        <span className="cursor-pointer border p-2 hover:bg-slate-100 transition">
          Xóa
        </span>
      </div>
      <div className="flex gap-4 text-xl items-center">
        <span>Tổng thanh toán ({orderList.length} sản phẩm)</span>
        <span className="text-red-500">{priceConvert(totalPrice)}₫</span>
        <div>
          <Button
            isFull
            black
            afterAnimation
            onClick={() => handleGoToCheckout()}
          >
            Mua ngay
          </Button>
        </div>
      </div>
    </div>
  );
};

export default memo(CartPayment);
