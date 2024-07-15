import React from "react";
import { Image } from "..";
import { collectionImage } from "../../config";

const BannerHeadPage = ({ title, description }) => {
  return (
    <div className="relative py-16 text-center">
      <div className="flex flex-col gap-3 z-3 justify-center w-full px-10">
        <div className="title">
          <h3>{title}</h3>
        </div>
        <div className="description">{description}</div>
      </div>
      <div className="absolute top-0 bottom-0 left-0 right-0 z-2">
        <Image data={collectionImage} />
      </div>
    </div>
  );
};

export default BannerHeadPage;
