import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Overlay, Breadcrumbs } from "../../components";
import BannerCollections from "./components/BannerCollections";
import SortButton from "./container/SortButton";
import ProductsList from "./container/ProductsList";
import FilterButton from "./container/FilterButton";
import { IoFilter } from "react-icons/io5";

import { resetPresentValue, presentValue } from "../../app/reducers";
const Collections = () => {
  const dispatch = useDispatch();
  const [overlay, setOverlay] = useState(false);

  const present = useSelector(presentValue);

  const handleSetOverlay = () => {
    setOverlay(!overlay);
  };

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
            <FilterButton/>
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
      <Overlay isOverlay={overlay} onClick={handleSetOverlay} />
    </div>
  );
};

export default Collections;
