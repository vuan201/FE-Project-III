import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Breadcrumbs, Loading } from "../../components";
import {
  LibraryStyles,
  ProductInfomation,
  ProductSlideImage,
} from "./containers";
import {
  fetchProduct,
  selectProductItem,
  selectProductStatus,
} from "../../app/reducers";
const ProductDetail = () => {
  const { slug } = useParams();

  const dispatch = useDispatch();
  const product = useSelector(selectProductItem);
  const status = useSelector(selectProductStatus);

  useEffect(() => {
    dispatch(fetchProduct(`?slug=${slug}`));
  }, [dispatch, slug]);

  if (status !== "succeeded") return <Loading />;

  return (
    <>
      <div className="mx-auto mb-10 px-12">
        <div className="w-full m-auto max-w-container">
          <Breadcrumbs />
          <div className={"grid grid-cols-1 md:grid-cols-2 gap-4"}>
            <div className="w-full h-full">
              <ProductSlideImage images={product.images} />
            </div>
            <div className="w-full h-full">
              <ProductInfomation data={product} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full my-5">
        <LibraryStyles />
      </div>
    </>
  );
};

export default ProductDetail;
