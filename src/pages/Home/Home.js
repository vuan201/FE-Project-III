import { React, useState, useEffect } from "react";

// API
import axios from "axios";
import categoriesApi from "../../Api/categoriesApi";
import productApi from "../../Api/productApi";
import stylesApi from "../../Api/stylesApi";

// Conponent
import Button from "../../components/Button";
import NewProducts from "../../components/NewProducts";
import ShowBanner from "../../components/ShowBanner";
import ProductCard from "../../components/Card/ProductCard";
import CategoryCard from "../../components/Card/CategoryCard";
import StyleImageCard from "../../components/Card/StyleImageCard";

// Slider
import Sliders from "../../components/Sliders/Sliders";
import SlickSlide from "../../components/Sliders/SlickSlide";
import PrevArrow from "../../components/Sliders/DirectionButton/PrevArrow ";
import NextArrow from "../../components/Sliders/DirectionButton/NextArrow";

// Banner Image
import slider from "../../assets/images/home-shoes-slider-01.webp";
import banner1 from "../../assets/images/banner/banner-image-1_870x.webp";
import banner2 from "../../assets/images/banner/banner-image-2_870x.webp";
import banner3 from "../../assets/images/banner/banner-image-3_420x.webp";
import banner4 from "../../assets/images/banner/banner-image-4_420x.webp";
import banner5 from "../../assets/images/banner/banner-image-5_870x.webp";
import banner6 from "../../assets/images/banner/banner-image-6_870x.webp";

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

  const handleSetProducts = (response) => {
    if(response){
      setProducts(response);
      response.length < limit ? setIsFull(true) : setIsFull(false);
    }
  };

  const handleSetLimit = () => {
    products.length % 4 === 0 ? setLimit(limit + 4) : setIsFull(true);
  };


  // Slider Settings
  const productSlidesettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const categoriesSlidesettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 0,
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
  };

  const StylesSlidesettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 0,
    arrows: false,
  };

  return (
    <div className="m-auto">
      {/* banner 1 */}
      <div className="banner1 m-auto px-8 mb-10">
        <ShowBanner image={slider} name={"slider"} link={"category"} />
      </div>
      {/* banner 2 */}
      <div className="banner2 grid grid-rows-4 md:grid-rows-2 grid-flow-col gap-7 mb-10 px-8">
        <div className="row-span-2 col-span-2 ">
          <ShowBanner
            shadowAnimation
            image={banner1}
            name={"slider"}
            link={"category"}
          />
        </div>
        <div className="row-span-1 col-span-2 ">
          <ShowBanner
            shadowAnimation
            image={banner2}
            name={"slider"}
            link={"category"}
          />
        </div>
        <div className="row-span-1 col-span-1">
          <ShowBanner
            shadowAnimation
            image={banner3}
            name={"slider"}
            link={"category"}
          />
        </div>
        <div className="row-span-1 col-span-1">
          <ShowBanner
            shadowAnimation
            image={banner4}
            name={"slider"}
            link={"category"}
          />
        </div>
      </div>
      {/* New product */}
      <div className="max-w-6xl m-auto mb-10">
        <NewProducts products={products} onClick={handleSetLimit} isFull={isFull}/>
      </div>
      {/* Banner 3 */}
      <div className="banner3 grid grid-rows-4 md:grid-rows-2 grid-flow-col gap-7 mb-10 px-8">
        <div className="row-span-2 col-span-2">
          <ShowBanner
            shadowAnimation
            image={banner5}
            name={"slider"}
            link={"category"}
          />
        </div>
        <div className="row-span-2 col-span-2">
          <ShowBanner
            shadowAnimation
            image={banner6}
            name={"slider"}
            link={"category"}
          />
        </div>
      </div>
      {/* Product Slide */}
      <div className="productTrending max-w-6xl m-auto mb-10 px-8">
        <div className="headerCard mb-10">
          <span className="title">thịnh hành</span>
        </div>
        <Sliders settings={productSlidesettings} datas={trendingProducts}>
          <ProductCard />
        </Sliders>
      </div>
      {/* Categories Slide */}
      <div className="spotlight w-full m-auto px-4 bg-stone-200">
        <div className="max-w-screen-2xl m-auto mb-10 py-10 px-8">
          <div className="headerCard mb-10 ">
            <span className="title">điểm nhấn</span>
          </div>
          <Sliders settings={categoriesSlidesettings} datas={categories}>
            <CategoryCard />
          </Sliders>
        </div>
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
