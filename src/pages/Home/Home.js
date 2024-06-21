import { React, useState, useEffect, useRef } from "react";

// API
import categoriesApi from "../../Api/categoriesApi";
import productApi from "../../Api/productApi";
import stylesApi from "../../Api/stylesApi";
import brandsApi from "../../Api/BrandApi";
import showError from "../../Api/axiosError";

// Conponent
import Loading from "../../components/Loading";
import Button from "../../components/Button";
import ProductCard from "../../components/Card/ProductCard";
import CategoryCard from "../../components/Card/CategoryCard";
import StyleImageCard from "../../components/Card/StyleImageCard";
import BannerSlider from "../../components/Banner/BannerSlider";
import Image from "../../components/Image";
import BannerWrap from "../../components/Banner/BannerWrap";

// Slider
import Sliders from "../../components/Sliders/Sliders/Sliders";

// Banner Image
import { sliderImage, bannerWrap, frame } from "../../config/image";
import "./Home.css";

import {
  StylesSlidesettings,
  bannerSliderSettings,
  categoriesSlidesettings,
  brandsSlidesettings,
} from "../../config/slickConfig";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [styles, setStyles] = useState([]);
  const [brands, setBrands] = useState([]);

  const [isLoading, setIsloading] = useState(false);
  const [errorMesage, setErrorMesage] = useState("");

  const params = { _limit: 4 };

  const fetch = async () => {
    setIsloading(true);
    try {
      const [rpCategories, rpNewProducts, rpStyles, rpBrands] =
        await Promise.all([
          categoriesApi.getAll({}),
          productApi.getAll(params),
          stylesApi.getAll({}),
          brandsApi.getAll({}),
        ]);
      setCategories(rpCategories);
      setProducts(rpNewProducts);
      setStyles(rpStyles);
      setBrands(rpBrands);
    } catch (error) {
      setErrorMesage(error);
      showError(error);
    }

    setIsloading(false);
  };
  useEffect(() => {
    fetch();
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div className="m-auto">
      <div className="slider-container mb-10 pb-10">
        <Sliders settings={bannerSliderSettings} datas={sliderImage}>
          <BannerSlider />
        </Sliders>
      </div>
      <div className="mx-auto mb-10 px-12">
        <div className="w-full m-auto max-w-container">
          <Sliders settings={categoriesSlidesettings} datas={categories}>
            <CategoryCard />
          </Sliders>
        </div>
      </div>
      <div className="mx-auto mb-10 px-12">
        <div className="w-full m-auto max-w-container">
          <Sliders settings={brandsSlidesettings} datas={brands}>
            <Image />
          </Sliders>
        </div>
      </div>
      <div className="mb-10 px-12 py-10">
        <div className="max-w-container m-auto w-full grid grid-rows-1 md:grid-rows-2 grid-cols-2 md:grid-cols-12 gap-4 md:gap-8">
          <div className="col-span-2 md:col-span-6 md:row-span-2">
            <BannerWrap data={bannerWrap[0]} top />
          </div>
          <div className="col-span-2 md:col-span-6 md:row-span-1">
            <BannerWrap data={bannerWrap[1]} bottom />
          </div>
          <div className="col-span-2 md:col-span-6 md:row-span-1">
            <BannerWrap data={bannerWrap[2]} bottom />
          </div>
        </div>
      </div>

      <div className="mb-10 px-12 pb-12">
        <div className="w-full max-w-container mx-auto">
          <div className="w-full grid grid-rows-1 grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 ">
            <div className="col-span-1 order-2 md:order-1">
              <div className="flex flex-wrap">
                {products
                  ? products.map((product, index) => (
                      <div key={index} className="basis-1/2">
                        <ProductCard data={product} />
                      </div>
                    ))
                  : undefined}
              </div>
            </div>
            <div className="col-span-1 order-1 md:order-2">
              <BannerWrap data={bannerWrap[3]} bottom />
            </div>
          </div>
        </div>
      </div>
      <div className="mb-10 px-12 pb-12">
        <div className="w-full max-w-container mx-auto">
          <Image data={frame} />
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
