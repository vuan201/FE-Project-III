import { React } from "react";
// Conponent
import {
  IntroSlide,
  CategoriesSlide,
  BrandsSlide,
  BannerWrapContainer,
  OutstandingContainer,
  BigBanner,
  ByMeContainer,
  LibraryStyles,
} from "../../features";

// Banner Image
import "./Home.css";

const Home = () => {
  return (
    <div className="m-auto">
      <IntroSlide />
      <CategoriesSlide />
      <BrandsSlide />
      <BannerWrapContainer />
      <OutstandingContainer />
      <BigBanner />
      <ByMeContainer />
      <LibraryStyles />
      {/* 
      <div className="StyleImage m-auto mb-10 px-8">
        <div className="headerCard text-2xl mb-10">
          <span className="title">thư viện ảnh</span>
        </div>
        <Sliders settings={StylesSlidesettings} datas={styles}>
          <StyleImageCard />
        </Sliders>
      </div> 
      */}
    </div>
  );
};

export default Home;
