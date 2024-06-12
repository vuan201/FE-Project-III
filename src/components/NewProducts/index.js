import { React, useEffect, useState } from "react";

import ProductCard from "../Card/ProductCard";
import Button from "../Button";

const NewProducts = ({ products, onClick, isFull }) => {
  return (
    <>
      <div className="headerCard mb-10">
        <span className="title">sản phẩm mới nhất</span>
      </div>
      <div className="mb-10 m-auto grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-4">
        {products
          ? products.map((product, index) => (
              <ProductCard key={index} data={product} ></ProductCard>
            ))
          : undefined}
      </div>
      {!isFull ? (
        <div className="m-auto footerCard mb-5 w-80">
          <div className="btnShowAll">
            <Button blueBtn reverse onClick={onClick}>
              Xem Thêm
            </Button>
          </div>
        </div>
      ) : undefined}
    </>
  );
};

export default NewProducts;
