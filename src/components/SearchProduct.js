import React from "react";
import { FaSearch } from "react-icons/fa";
import Input from "./Input";
import Button from "./Button";
import clsx from "clsx";

const SearchProduct = () => {
  const className = clsx("flex flex-row justify-center items-center relative ")
  return (
    // <div className="flex flex-row justify-center items-center relative">
    //   <Input
    //     type="text"
    //     className="border rounded-l px-4 py-2 outline-none focus:border-blue-500"
    //   > Tìm kiếm sản phẩm</Input>
    //   <button className="absolute bg-transparent text-dark-500 px-4 py-2 rounded-r right-0">
    //     <FaSearch />
    //   </button>
    // </div>
    <div className={className}>
      <div className="basis-full  ">
        <Input className={'rounded-full'}>Tìm kiếm sản phẩm</Input>
      </div>
      <button className="border-0 absolute bg-transparent text-dark-500 px-4 py-2 rounded-r right-0">
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchProduct;
