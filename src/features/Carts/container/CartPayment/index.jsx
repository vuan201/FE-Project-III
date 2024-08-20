import React, { memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectAuthToken, selectOrderItems } from "../../../../app/reducers";
import { priceConvert } from "../../../../utils/priceConvert";
import { Button, Overlay, PopupMessage } from "../../../../components";
import useSticky from "../../../../hooks/useSticky";
import { totalPrice } from "../../../../utils/totalPrice";

const CartPayment = () => {
  const navigate = useNavigate();

  const orderList = useSelector(selectOrderItems);
  const token = useSelector(selectAuthToken);

  const { isSticky, elementRef } = useSticky();

  const [overlay, setOverlay] = useState(false);

  const total = totalPrice(orderList)

  const handleGoToCheckout = () => {
    if (token && orderList.length > 0) {
      navigate("/checkout");
    } else {
      setOverlay(true);
    }
  };

  const login = () => {
    navigate("/login");
  };

  return (
    <>
      <Overlay isOverlay={overlay} onClick={() => setOverlay(false)}>
        {!token ? (
          <PopupMessage
            message={"Vui lòng đăng nhập để thanh toán"}
            receiveName="Đăng nhập"
            cancelName="Hủy"
            receive={overlay}
            handleReceive={() => login()}
            handleCancel={() => setOverlay(false)}
          />
        ) : orderList.length === 0 ? (
          <PopupMessage
            message={"Vui lòng chọn sản phẩm"}
            receive={overlay}
            handleReceive={() => login()}
            handleCancel={() => setOverlay(false)}
          />
        ) : undefined}
      </Overlay>
      <div
        ref={elementRef}
        className={`mx-8 py-2 flex justify-between gap-2 border-t-2 ${
          isSticky ? "" : "shadow-[3px_-5px_15px_-8px_rgba(0,0,0,0.50)]"
        }`}
      >
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
          <span className="text-red-500">{priceConvert(total)}</span>
          <div>
            <Button
              isFull
              black
              afterAnimation
              onClick={() => handleGoToCheckout()}
            >
              Thanh toán
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(CartPayment);
