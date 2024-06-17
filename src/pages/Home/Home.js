import { React, useState, useEffect, useRef } from "react";

// API
import axios from "axios";
import categoriesApi from "../../Api/categoriesApi";
import productApi from "../../Api/productApi";
import stylesApi from "../../Api/stylesApi";

// Conponent
import Button from "../../components/Button";
import NewProducts from "../../components/NewProducts";
import ProductCard from "../../components/Card/ProductCard";
import CategoryCard from "../../components/Card/CategoryCard";
import StyleImageCard from "../../components/Card/StyleImageCard";
import BannerSlider from "../../components/Banner/BannerSlider";
import Image from "../../components/Image";
// Slider
import Sliders from "../../components/Sliders/Sliders/Sliders";
import SlickSlide from "../../components/Sliders/SlickSlide";
import PrevArrow from "../../components/Sliders/DirectionButton/PrevArrow ";
import NextArrow from "../../components/Sliders/DirectionButton/NextArrow";

// Banner Image
import { sliderImage } from "../../config";
import "./Home.css";

const Home = () => {
  // Use State
  const [products, setProducts] = useState([]);
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [styles, setStyles] = useState([]);

  const [limit, setLimit] = useState(4);
  const [isFull, setIsFull] = useState(false);

  useEffect(() => {
    const source = axios.CancelToken.source();

    // Param
    const params = { _limit: limit };

    // call Product API
    productApi.getAll(params).then((response) => handleSetProducts(response));

    // Hủy yêu cầu khi component bị unmount
    return () => {
      source.cancel("Component unmounted");
    };
  }, [limit]);

  // Call API
  useEffect(() => {
    const source = axios.CancelToken.source();

    productApi.getAll({}).then((response) => setTrendingProducts(response));

    // call Categories API
    categoriesApi.getAll({}).then((response) => setCategories(response));

    // call Styles API
    stylesApi.getAll(null).then((response) => setStyles(response));

    // Hủy yêu cầu khi component bị unmount
    return () => {
      source.cancel("Component unmounted");
    };
  }, []);

  const StylesSlidesettings = {
    slidesToScroll: 1,
    speed: 500,
    dots: false,
    infinite: true,
    slidesToShow: 5,
    autoplay: false,
    autoplaySpeed: 0,
    arrows: false,
  };

  const bannerSliderSettings = {
    customPaging: (i) => {
      // console.log(sliderImage[i].url); 
      return (
        <a>
          <Image data={sliderImage[i]} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-thumb hidden lg:block",
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleSetProducts = (response) => {
    if (response) {
      setProducts(response);
      response.length < limit ? setIsFull(true) : setIsFull(false);
    }
  };

  const handleSetLimit = () => {
    products.length % 4 === 0 ? setLimit(limit + 4) : setIsFull(true);
  };

  return (
    <div className="m-auto">
      <div className="slider-container mb-10">
        <Sliders settings={bannerSliderSettings} datas={sliderImage}>
          <BannerSlider />
        </Sliders>
      </div>
      <div className="max-w-6xl m-auto mb-10 relative">
        <NewProducts
          products={products}
          onClick={handleSetLimit}
          isFull={isFull}
        />
      </div>

      <div className="StyleImage m-auto mb-10 px-8">
        <div className="headerCard text-2xl mb-10">
          <span className="title">thư viện ảnh</span>
        </div>
        <Sliders settings={StylesSlidesettings} datas={styles}>
          <StyleImageCard />
        </Sliders>
      </div>
    </div>
  );
};

export default Home;
