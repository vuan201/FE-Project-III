import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { selectorColor } from "../../../../app/reducers";
import { useSelector } from "react-redux";
import { Image } from "../../../../components";

const ProductSlideImage = ({ images }) => {
  const bannerSliderSettings = {
    appendDots: (dots) => <ul>{dots}</ul>,
    dots: true,
    dotsClass: "slick-thumb slick-thumb-image hidden lg:block",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    prevArrow: null, // Tắt nút mũi tên Previous
    nextArrow: null, // Tắt nút mũi tên Next
  };

  const newImages = Object.groupBy(images, (color) => color);

  const selectColor = useSelector(selectorColor);

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, [selectColor]);

  return (
    <div className="slider-container w-full h-full relative">
      <Slider
        asNavFor={nav2}
        ref={(slider) => (sliderRef1 = slider)}
        // {...bannerSliderSettings}
      >
        {selectColor == ""
          ? images.map((image) => (
              <Image data={{ image: image.url, name: image.color }} />
            ))
          : undefined}
      </Slider>
      <Slider
        asNavFor={nav1}
        ref={(slider) => (sliderRef2 = slider)}
        slidesToShow={3}
        swipeToSlide={true}
        focusOnSelect={true}
      >
        {selectColor == ""
          ? images.map((image) => (
              <Image data={{ image: image.url, name: image.color }} />
            ))
          : undefined}
      </Slider>
    </div>
  );
};

export default ProductSlideImage;
