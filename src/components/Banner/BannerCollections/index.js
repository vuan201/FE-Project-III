import React from "react";

const BannerCollections = () => {
  return (
    <div className="relative py-16">
      <div className="flex flex-col gap-3 z-3 justify-center w-full px-10">
        <div className="title">
          <h3>bộ sưu tập</h3>
        </div>
        <div className="description">
          Mua sắm qua lựa chọn mới nhất của chúng tôi
        </div>
      </div>
      <div className="absolute top-0 bottom-0 left-0 right-0 z-2">
        <Image data={collectionImage} />
      </div>
    </div>
  );
};

export default BannerCollections;
