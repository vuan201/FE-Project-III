import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import Image from "../../Image";
const BannerImage = (prop) => {
  const { image, name, shadowAnimation } = prop;

  const className = clsx("w-full overflow-hidden", {
    cardShadow: shadowAnimation,
  });

  return (
    <div className={className}>
      <Link to={`/filter`}>
        <Image image={image} name={name} />
      </Link>
    </div>
  );
};

export default BannerImage;