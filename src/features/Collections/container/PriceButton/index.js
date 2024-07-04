import React from "react";
import { FilterButton } from "../../components";
import { FaMoneyBill } from "react-icons/fa";
const PriceButton = () => {
  return (
    <FilterButton>
      <div>
        <FaMoneyBill />
      </div>
      <span>Giá</span>
    </FilterButton>
  );
};

export default PriceButton;
