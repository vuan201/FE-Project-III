import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sort } from "../../../../utils/sort";
import {
  fetchProducts,
  selectProductsError,
  selectProductsItem,
  selectProductsStatus,
  selectFiltersColors,
  selectFiltersSizes,
  selectFiltersPrice,
  presentValue,
  setProducts,
} from "../../../../app/reducers";
import { Loading, ProductCard } from "../../../../components";

const ProductsList = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProductsItem);
  const status = useSelector(selectProductsStatus);

  // filter
  const filterColors = useSelector(selectFiltersColors);
  const filterSizes = useSelector(selectFiltersSizes);
  const filterPrice = useSelector(selectFiltersPrice);

  const sortType = useSelector(presentValue);

  useEffect(() => {
    const params = {}

    dispatch(fetchProducts(params))
  }, [])

  const filteredProducts = () => {
    let filter = products.filter((product) => {
      // Lọc theo màu
      if (
        filterColors.length > 0 &&
        !product.colors.some((color) => {
          filterColors.includes(color.color);
        })
      ) {
        return false;
      }

      // // Lọc theo size
      // if (filterSizes.length > 0) {
      //   product.colors.forEach((color) => { // Sử dụng forEach thay vì map
      //     const availableSizes = color.sizeAndQuantity.map((sq) => sq.size);

      //     if (!filterSizes.some((size) => availableSizes.includes(size))) {
      //       return false;
      //     }
      //   });
      // }

      // Lọc theo giá
      if (product.price < filterPrice[0] || product.price > filterPrice[1]) {
        return false;
      }

      return true;
    });

    // Sắp xếp danh sách sản phẩm
    filter = sort(filter, sortType);

    return filter;
  };

  if (status === "loading") return <Loading />;
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {products.length > 0
        ? products.map((product, index) => (
            <ProductCard data={product} key={index} />
          ))
        : undefined}
    </div>
  );
};

export default ProductsList;
