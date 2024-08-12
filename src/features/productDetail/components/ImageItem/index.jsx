import React from "react";
import { Image } from "../../../../components";
import clsx from "clsx";
import "./ImageItem.css";

const ImageItem = ({ image, isSelector, isValid, onClick }) => {
  const { color, url } = image;

  const imageBoxClassName = clsx(
    "imageItem w-20 h-28 relative transition hover:border hover:border-black",
    {
      imageItemSelector: isSelector,
      "opacity-100 cursor-pointer": isValid,
      "opacity-50 brightness-50": !isValid,
    }
  );
  return (
    <div
      className={imageBoxClassName}
      onClick={onClick}
    >
      <div className="w-full h-[70px]">
        <Image data={{ name: color, image: url }} />
      </div>
      <span className="block text-center text-sm font-semibold">{color}</span>
    </div>
  );
};

export default ImageItem;
