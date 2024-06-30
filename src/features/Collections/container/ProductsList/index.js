import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  resetProducts,
  selectProductsError,
  selectProductsItem,
  selectProductsStatus,
} from "../../../../app/reducers";
import { Loading, ProductCard } from "../../../../components";

const ProductsList = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProductsItem);
  const status = useSelector(selectProductsStatus);
  const error = useSelector(selectProductsError);

  const [params, setParams] = useState({})

  useEffect(() => {

    dispatch(fetchProducts(params));

  }, [params] );

  if (status === "loading") return <Loading />;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {products
        ? products.map((product, index) => (
            <ProductCard data={product} key={index} />
          ))
        : undefined}
    </div>
  );
};

export default ProductsList;
