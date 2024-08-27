import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchOrderById,
  selectOrderItem,
  selectOrderStatus,
} from "../../../../app/reducers";
import { Container, Loading, CustomBreadcrumbs } from "../../../../components";
import { FETCH_LOADING, FETCH_SUCCEEDED } from "../../../../config";


const BillDetail = ({ orderId }) => {
  const breadcrumbList = [
    { url: "carts", name: "Giỏ hàng" },
    { name: "Thanh toán" },
  ];

  const dispatch = useDispatch();
  const order = useSelector(selectOrderItem);
  const orderStatus = useSelector(selectOrderStatus);

  useEffect(() => {
    if (orderId) {
      dispatch(fetchOrderById(orderId));
    }
  }, []);

  return (
    <Container>
      <div className="my-4">
        <CustomBreadcrumbs breadcrumbs={breadcrumbList}></CustomBreadcrumbs>
      </div>
      {orderStatus === FETCH_LOADING && <Loading />}
      {orderStatus === FETCH_SUCCEEDED && <div></div>}
    </Container>
  );
};

export default BillDetail;
