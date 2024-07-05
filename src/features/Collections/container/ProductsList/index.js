import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  selectProductsError,
  selectProductsItem,
  selectProductsStatus,
  selectFiltersColors,
  selectFiltersSizes,
  selectFiltersPrice,
  presentValue,
} from "../../../../app/reducers";
import { Loading, ProductCard } from "../../../../components";

const ProductsList = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProductsItem);
  const status = useSelector(selectProductsStatus);
  const error = useSelector(selectProductsError);

  const [newProducts, netNewProducts] = useState([]);

  const filterColors = useSelector(selectFiltersColors);
  const filterSizes = useSelector(selectFiltersSizes);
  const filterPrice = useSelector(selectFiltersPrice);
  const sortBy = useSelector(presentValue);

  const [params, setParams] = useState({});

  useEffect(() => {
    dispatch(fetchProducts(params));
    netNewProducts(products);
  }, [params]);

  useEffect(() => {
    
    filterProduct()

  }, [filterColors, filterSizes, filterPrice, sortBy]);

  const filterProduct = () => {
    netNewProducts(newProducts.filter(product =>{
      
    }))
  };

  if (status === "loading") return <Loading />;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {newProducts
        ? newProducts.map((product, index) => (
            <ProductCard data={product} key={index} />
          ))
        : undefined}
    </div>
  );
};

export default ProductsList;
