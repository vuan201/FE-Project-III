import React from "react";
import { Image } from "../../../components";
import { frame } from "../../../config";

const BigBanner = () => {
  return (
    <div className="mb-10 px-12 pb-12">
      <div className="w-full max-w-container mx-auto">
        <Image data={frame[0]} />
      </div>
    </div>
  );
};

export default BigBanner;
