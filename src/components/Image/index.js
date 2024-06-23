import React from "react";
import './Image.css'
import clsx from "clsx";

const Image = (prop) => {
  const {animation} = prop
  const { image, name } = prop.data;

  const className = clsx("image w-full h-full", {
    "imageAnimation": animation
  })
  return (
    <div className={className}>
      <img
        className="block h-full w-full object-contain object-center object-cover max-w-full"
        src={image}
        alt={name}
      />
    </div>
  );
};

export default Image;
