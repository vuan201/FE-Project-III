import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Breadcrumbs, BannerHeadPage } from "../../components";
import { SortButton, ProductsList, Filters } from "./container";

import { resetParams, selectCategory } from "../../app/reducers";

const Collections = () => {
  const dispatch = useDispatch();

  const category = useSelector(selectCategory);

  useEffect(() => {
    return () => {
      dispatch(resetParams());
    };
  }, []);

  return (
    <div className="content w-full m-auto">
      <BannerHeadPage title={category.name ?? "Bộ sưu tập"} />
      <div className="mx-auto mb-10 px-12 mt-4">
        <div className="w-full m-auto max-w-container">
          <Breadcrumbs
            breadcrumbs={[
              {
                url: category.name
                  ? `/collections/${category.name}`
                  : "/collections",
                name: category.name ?? "Bộ sưu tập",
              },
            ]}
          />
        </div>
      </div>
      <div className="px-8 mb-10">
        <div className="m-auto flex justify-between w-full max-w-container">
          <div>
            <Filters />
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
