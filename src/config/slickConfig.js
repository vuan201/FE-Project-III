import { SlickSlide, Image } from "../components";
import { sliderImage } from "./image";

export const StylesSlideSettings = {
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
  appendDots: (dots) => <ul>{dots}</ul>,
  customPaging: (i) => {
    return (
      <a>
        <Image data={sliderImage[i]} />
      </a>
    );
  },
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

export const categoriesSlideSettings = {
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

export const brandsSlideSettings = {
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



export const marketingContainerSettings = {
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
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
      breakpoint: 1020,
      settings: {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
