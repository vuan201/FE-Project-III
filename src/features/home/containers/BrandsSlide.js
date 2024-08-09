import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { brandsSlideSettings, fetchIdle, fetchLoading } from "../../../config";
import {Sliders, Loading, Image} from "../../../components";

import {
  selectBrandsItem,
  selectBrandsError,
  selectBrandsStatus,
  fetchBrands,
} from "../../../app/reducers/brandsSlice";

const BrandsSlide = () => {
  const dispatch = useDispatch();
  const brands = useSelector(selectBrandsItem);
  const status = useSelector(selectBrandsStatus);
  const error = useSelector(selectBrandsError);

  useEffect(() => {
    if (status === fetchIdle) {
      dispatch(fetchBrands());
    }
  }, [status, dispatch]);

  if (status === fetchLoading) return <Loading />;

  return (
    <div className="mx-auto mb-10 px-12">
      <div className="w-full m-auto max-w-container">
        <Sliders settings={brandsSlideSettings} datas={brands}>
          <Image />
        </Sliders>
      </div>
    </div>
  );
};

export default BrandsSlide;
