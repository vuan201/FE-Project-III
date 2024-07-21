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
    const params = {
      minPrice: filterPrice[0],
      maxPrice: filterPrice[1],
      sort: sortType.sort,
      order: sortType.order,
    };

    if (filterColors.length > 0) params.color = filterColors.join(",");
    if (filterSizes.length > 0) params.size = filterSizes.join(",");

    dispatch(fetchProducts(params));
  }, [filterColors, filterSizes, filterPrice, sortType]);

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
