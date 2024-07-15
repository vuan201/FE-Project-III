import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { selectorColor, styles } from "../../../../app/reducers";
import { useSelector } from "react-redux";
import { Image } from "../../../../components";
import './ProductSlideImage.css'
const ProductSlideImage = ({ images }) => {
  const newImages = Object.groupBy(images, ({ color }) => color);

  const selectColor = useSelector(selectorColor);

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  const [infinite, setInfinite] = useState(true);

  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    if (selectColor === "") setInfinite(images.length > 1);
    else setInfinite(newImages[selectColor].length > 1);

    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, [selectColor]);

  const settings = {
    dots: false,
    infinite: infinite,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    asNavFor: nav2,
    ref: (slider) => (sliderRef1 = slider),
  };
  const settings2 = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    swipeToSlide: true,
    focusOnSelect: true,
    asNavFor: nav1,
    ref: (slider) => (sliderRef2 = slider),
  };

  return (
    <div className="slider-container w-full h-full relative">
      <Slider {...settings}>
        {selectColor === ""
          ? images.map((image) => (
              <Image
                key={image.color}
                data={{ image: image.url, name: image.color }}
              />
            ))
          : newImages[selectColor].map((image) => (
              <Image
                key={image.color}
                data={{
                  image: image.url,
                  name: image.color,
                }}
              />
            ))}
      </Slider>
      <Slider {...settings2}>
        {selectColor === ""
          ? images.length > 2
            ? images.map((image) => (
                <div className="product-slide-image-active">
                  <Image
                    key={image.color}
                    data={{ image: image.url, name: image.color }}
                  />
                </div>
              ))
            : undefined
          : newImages[selectColor] > 2
          ? newImages[selectColor].map((image) => (
              <Image
                key={image.color}
                data={{
                  image: image.url,
                  name: image.color,
                }}
              />
            ))
          : undefined}
      </Slider>
    </div>
  );
};

export default ProductSlideImage;
