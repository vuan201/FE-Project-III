import React from "react";

const Image = ({ data }) => {
  const { image, name } = data;

  console.log(image);

  return (
    <div className="image w-full h-full">
      <img
        className="block h-full w-full object-contain object-center max-w-full"
        src={image}
        alt={name}
      />
    </div>
  );
};

export default Image;
