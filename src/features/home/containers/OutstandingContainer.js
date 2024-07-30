import React, { useEffect } from "react";
import { bannerWrap } from "../../../config";
import { ProductCard, Loading } from "../../../components";
import BannerWrap from "../components/BannerWrap";
import { useSelector, useDispatch } from "react-redux";
import {
  selectProductsItem,
  selectProductsStatus,
  selectProductsError,
  fetchProducts,
} from "../../../app/reducers";
import MyProductCard from "../../../components/Card/MyProductCard/MyProductCard";

const OutstandingContainer = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProductsItem);
  const status = useSelector(selectProductsStatus);
  const error = useSelector(selectProductsError);

  const params = { limit: 4 };
  // const params = { size: 4 };

  useEffect(() => {
    dispatch(fetchProducts(params));
  }, []);

  if (status === "loading") return <Loading />;

  return (
    <div className="mb-10 px-12 pb-12">
      <div className="w-full max-w-container mx-auto">
        <div className="grid grid-rows-1 grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 ">
          <div className="col-span-1 order-2 md:order-1">
            <div className="grid grid-cols-2 h-full gap-8">
              {products?.map((it) => (
                <MyProductCard key={`product-item-${it.id}`} data={it} />
              ))}
            </div>
          </div>

          <div className="col-span-1 order-1 md:order-2">
            <BannerWrap data={bannerWrap[3]} bottom />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutstandingContainer;
