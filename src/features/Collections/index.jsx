import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CustomBreadcrumbs, BannerHeadPage, Container } from "../../components";
import { SortButton, ProductsList, Filters } from "./container";

import { fetchCategory, resetParams, selectCategory } from "../../app/reducers";
import { useParams } from "react-router";

const Collections = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const category = useSelector(selectCategory);

  useEffect(() => {
    if (params.category) {
      dispatch(fetchCategory(params.category));
    }

    return () => {
      dispatch(resetParams());
    };
  }, [params]);

  return (
    <div className="content w-full m-auto">
      <BannerHeadPage title={category.name ?? "Bộ sưu tập"} />
      <div className="mx-auto mb-10 px-12 mt-4">
        <div className="w-full m-auto max-w-container">
          <CustomBreadcrumbs
            breadcrumbs={[
              {
                url: category
                  ? `/collections/${category.slug}`
                  : "/collections",
                name: category.name ?? "Bộ sưu tập",
              },
            ]}
          />
        </div>
      </div>
      <Container>
        <div className="m-auto flex justify-between w-full">
          <div>
            <Filters />
          </div>
          <SortButton />
        </div>
      </Container>
      <Container>
        <ProductsList categoryId={category.id ?? null} />
      </Container>
    </div>
  );
};

export default Collections;
