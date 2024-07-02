import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Breadcrumbs } from "../../components";
import BannerCollections from "./components/BannerCollections";
import SortButton from "./container/SortButton";
import ProductsList from "./container/ProductsList";
import FilterButton from "./container/FilterButton";

import { resetPresentValue } from "../../app/reducers";
const Collections = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(resetPresentValue());
    };
  }, []);

  return (
    <div className="content w-full m-auto">
      <BannerCollections />
      <div className="mx-auto mb-10 px-12 mt-4">
        <div className="w-full m-auto max-w-container">
          <Breadcrumbs />
        </div>
      </div>
      <div className="px-8 mb-10">
        <div className="m-auto flex justify-between w-full max-w-container">
          <div>
            <FilterButton />
          </div>
          <div></div>
          <SortButton />
        </div>
      </div>
      <div className="">
        <div className="mx-auto mb-10 px-12">
          <div className="w-full m-auto max-w-container">
            <ProductsList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
