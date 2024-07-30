import React, { useState, useEffect, useRef } from "react";
import { selectorColor } from "../../../../app/reducers";
import { useSelector } from "react-redux";
import { Image } from "../../../../components";
import "./ProductSlideImage.css";
const ProductSlideImage = ({ images }) => {
  const newImages = Object.groupBy(images, ({ color }) => color);
  const selectColor = useSelector(selectorColor);

  return (
    <div className="grid grid-cols-2 gap-1">
      {newImages[selectColor] ? (
        newImages[selectColor].length > 1 ? (
          newImages[selectColor].map((image, index) => {
            if (index === 0)
              return (
                <div key={index} className="col-span-2">
                  <Image data={{ image: image.url, name: image.color }} />
                </div>
              );
            else
              return (
                <div key={index}>
                  <Image data={{ image: image.url, name: image.color }} />
                </div>
              );
          })
        ) : (
          <div className="col-span-2">{newImages[selectColor][0].url}</div>
        )
      ) : undefined}
    </div>
  );
};

export default ProductSlideImage;
