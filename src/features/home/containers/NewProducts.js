import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchNewProducts,
  selectNewProductsItem,
  selectNewProductsStatus,
} from "../../../app/reducers";
import { ProductCard, Sliders } from "../../../components";
import { newPeoductsSlideSettings } from "../../../config";

const NewProducts = () => {
  const dispatch = useDispatch();
  const newProducts = useSelector(selectNewProductsItem);
  const state = useSelector(selectNewProductsStatus);

  useEffect(() => {
    dispatch(fetchNewProducts());
  }, [dispatch]);

  return (
    <div className="mx-auto mb-10 px-12">
      <div className="w-full m-auto max-w-container">
        <div className="text-center text-3xl font-bold uppercase pb-8">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            các sản phẩm mới nhất
          </span>
        </div>
        <Sliders datas={newProducts} settings={newPeoductsSlideSettings}>
          <ProductCard />
        </Sliders>
      </div>
    </div>
  );
};

export default NewProducts;
