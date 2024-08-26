import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { categoriesSlideSettings, fetchIdle, fetchLoading } from "../../../config";
import { Loading, Sliders, CategoryCard } from "../../../components";

import {
  selectCategoriesItem,
  selectCategoriesError,
  selectCategoriesStatus,
  fetchCategories,
} from "../../../app/reducers";

const CategoriesSlide = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategoriesItem);
  const status = useSelector(selectCategoriesStatus);
  const error = useSelector(selectCategoriesError);

  useEffect(() => {
    if (status === fetchIdle) {
      dispatch(fetchCategories());
    }
  }, [status, dispatch]);

  if (status === fetchLoading) return <Loading />;

  return (
    <div className="mx-auto mb-10 px-12">
      <div className="w-full m-auto max-w-container">
        <Sliders settings={categoriesSlideSettings} datas={categories}>
          <CategoryCard />
        </Sliders>
      </div>
    </div>
  );
};

export default CategoriesSlide;
