import React from "react";
import Image from "../../Image";
import Button from "../../Button";
import { NavLink } from "react-router-dom";
import "./BannerSlider.css";

const BannerSlider = ({ data }) => {
  const { image, name, title, titleTrending } = data;

  return (
    <div className="w-full h-full relative">
      <Image data={{ name: name, image: image }} />
      <div className="absolute top-0 left-[10%] uppercase w-[50%] h-full place-content-center">
        <div className="slideTitle text-left text-base font-bold w-full h-auto mb-6">
          <p>{title}</p>
        </div>
        <div className="slideTitleTrending text-left font-bold text-4xl lg:text-5xl xl:text-6xl w-full h-auto mb-12">
          <h1>{titleTrending}</h1>
        </div>
        <div className="slideButton w-56 h-auto mb-12">
          <NavLink to={'/filter'}>
            <Button>Bộ sưu tập</Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;
