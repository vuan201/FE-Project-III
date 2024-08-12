import React from "react";
import clsx from "clsx";
import { Button } from "../";
const PopupMessage = ({ receive, message, handleReceive }) => {
  return (
    <div
      className={clsx(
        "inset-1/2 relative max-w-80 cursor-auto -translate-x-1/2 -translate-y-1/2 p-5 bg-white z-10 text-center transition-opacity",
        {
          "opacity-0 invisible": !receive,
          "opacity-100 visible": receive,
        }
      )}
    >
      <div className="text-2xl pb-4">{message}</div>
      <div className="flex gap-1 items-stretch justify-around ">
        <Button black isFull onClick={handleReceive}>
          Xác nhận
        </Button>
        <Button white isFull>
          Hủy
        </Button>
      </div>
    </div>
  );
};

export default PopupMessage;
