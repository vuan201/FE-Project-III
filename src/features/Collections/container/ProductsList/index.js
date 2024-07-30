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
  selectCategory,
  selectLimitDefoult,
  selectPage,
  addProducts,
  selectAllProducts,
} from "../../../../app/reducers";
import { Loading, ProductCard } from "../../../../components";

const ProductsList = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProductsItem);
  const allProducts = useSelector(selectAllProducts);
  const status = useSelector(selectProductsStatus);

  // params
  const category = useSelector(selectCategory);
  const filterColors = useSelector(selectFiltersColors);
  const filterSizes = useSelector(selectFiltersSizes);
  const filterPrice = useSelector(selectFiltersPrice);
  const sortType = useSelector(presentValue);
  const limit = useSelector(selectLimitDefoult);
  const page = useSelector(selectPage);
  // console.log(category);

  useEffect(() => {
    const params = {
      category: category.id ?? null,
      minPrice: filterPrice[0],
      maxPrice: filterPrice[1],
      sort: sortType.sort,
      order: sortType.order,
      limit: limit,
      page: page,
    };
    filterColors.length > 0
      ? (params.color = filterColors.join(","))
      : (params.color = null);
    filterSizes.length > 0
      ? (params.size = filterSizes.join(","))
      : (params.size = null);

    dispatch(fetchProducts(params));
    if (status === "succeeded") {
      dispatch(addProducts(products));
    }
  }, [filterColors, filterSizes, filterPrice, sortType, category, page]);

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
