import React from "react";
import { bannerSliderSettings, sliderImage } from "../../../config";
import {Sliders, BannerSlider} from "../../../components";

const IntroSlide = () => {
  
  return (
    <div className="slider-container mb-10 pb-10">
      <Sliders settings={bannerSliderSettings} datas={sliderImage}>
        <BannerSlider />
      </Sliders>
    </div>
  );
};

export default IntroSlide;
