import React from "react";
import { Link } from "react-router-dom";
import "./ShowBanner.css";
import clsx from "clsx";
const ShowBanner = (prop) => {
  const { image, name, link, shadowAnimation } = prop;

  const className = clsx("aspect-w-16 aspect-h-9", {
    cardShadowImage: shadowAnimation,
  });

  return (
    <div className="cardImage imgBox w-full overflow-hidden">
      <Link to={`/category/:${link}`}>
        <div className={className}>
          <img className="image" src={image} alt={name} />
        </div>
      </Link>
    </div>
  );
};

export default ShowBanner;
