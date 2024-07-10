import React from "react";
import { Breadcrumbs } from "../../components";
import { useParams } from "react-router";

const ProductDetail = () => {
  const { slug } = useParams();

  return (
    <div className="mx-auto mb-10 px-12">
      <div className="w-full m-auto max-w-container">
        <Breadcrumbs />
      </div>
    </div>
  );
};

export default ProductDetail;
