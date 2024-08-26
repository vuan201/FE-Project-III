import React from "react";
import { useLocation, useNavigate } from "react-router";
import { FaCheck } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { Button } from "../../../components";
const CheckoutResults = () => {
  const navigate = useNavigate();

  // Lấy location hiện tại từ react-router
  const location = useLocation();

  // Tạo đối tượng URLSearchParams từ location.search
  const queryParams = new URLSearchParams(location.search);

  // Lấy các biến từ query string
  const vnp_ResponseCode = queryParams.get("vnp_ResponseCode");

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col h-96 justify-center items-center my-4">
      {vnp_ResponseCode === "00" ? (
        <div className="flex flex-col gap-4 justify-center items-center text-center text-green-500">
          <div>
            <CheckCircleIcon sx={{ fontSize: 80 }} />
          </div>
          <span className="text-5xl">Giao dịch thành công</span>
          <div className="w-1/2">
            <Button black afterAnimation isFull onClick={handleClick}>
              Quay lại trang chủ
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4 justify-center items-center text-center text-red-500">
          <div>
            <CancelIcon sx={{ fontSize: 80 }} />
          </div>
          <span className="text-5xl">Giao dịch thất bại</span>
          <div className="w-1/2">
            <Button black afterAnimation isFull onClick={handleClick}>
              Quay lại trang chủ
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutResults;
