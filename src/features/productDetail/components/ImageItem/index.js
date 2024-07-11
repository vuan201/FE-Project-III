import React from "react";
import { Image } from "../../../../components";
import clsx from "clsx";
import "./ImageItem.css";

const ImageItem = ({ image, isActive }) => {
  const { color, url } = image;

  const imageBoxClassName = clsx("imageItem w-20 h-28 p-2 relative", {
    
    imageItemActive: isActive,
  });
  return (
    <div className={imageBoxClassName}>
      <div className="w-[70px] h-[70px]">
        <Image data={{ name: color, image: url }} />
      </div>
      <span className="block text-center text-sm font-semibold">{color}</span>
    </div>
  );
};

export default ImageItem;
