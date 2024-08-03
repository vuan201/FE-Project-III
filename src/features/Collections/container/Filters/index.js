import React, { useState } from "react";
import { IoFilter } from "react-icons/io5";
import "./Filters.css";
import { FilterButton } from "../../components";
import { ColorButton, SizeButton, PriceButton } from "../";
const Filters = () => {
  return (
    <div className="flex flex-row gap-4">
      <ColorButton />
      <SizeButton />
      <PriceButton />
    </div>
  );
};

export default Filters;
