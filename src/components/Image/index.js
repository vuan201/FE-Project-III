import React from "react";
import "./Image.css";
import clsx from "clsx";

const Image = (prop) => {
  const { animation } = prop;
  const { image, name } = prop.data;

  const className = clsx("image w-full h-full overflow-hidden", {
    imageAnimation: animation,
  });
  return (
    <div className={className}>
      <img
        className="block h-full w-full object-cover object-center max-w-full"
        src={image}
        alt={name}
        draggable="false"
      />
    </div>
  );
};

export default Image;
