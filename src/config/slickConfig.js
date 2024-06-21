import SlickSlide from "../components/Sliders/SlickSlide";
import Image from "../components/Image";
import { sliderImage } from "./image";

export const StylesSlidesettings = {
  slidesToScroll: 1,
  speed: 500,
  dots: false,
  infinite: true,
  slidesToShow: 5,
  autoplay: false,
  autoplaySpeed: 0,
  arrows: false,
};

export const bannerSliderSettings = {
  // rết style của thẻ ul để cho nó chỉ sử dụng style theo class
  appendDots: (dots) => <ul>{dots}</ul>,
  customPaging: (i) => {
    // console.log(sliderImage[i].url);
    return (
      <a>
        <Image data={sliderImage[i]} />
      </a>
    );
  },
  dots: true,
  dotsClass: "slick-thumb slick-thumb-image hidden lg:block",
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
};

export const categoriesSlidesettings = {
  // dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  arrows: false,
  appendDots: (dots) => (
    <div
      style={{
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      <ul style={{ margin: "0px" }}> {dots} </ul>
    </div>
  ),
  customPaging: (i) => <SlickSlide>{i + 1}</SlickSlide>,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const brandsSlidesettings = {
  // dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 6,
  initialSlide: 0,
  arrows: false,
  appendDots: (dots) => (
    <div
      style={{
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      <ul style={{ margin: "0px" }}> {dots} </ul>
    </div>
  ),
  customPaging: (i) => <SlickSlide>{i + 1}</SlickSlide>,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
