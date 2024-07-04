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
  NewsletterSignupForm,
  MarketingContainer,
} from "..";

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
      <NewsletterSignupForm />
      <MarketingContainer />
      {/* <LibraryStyles /> */}
    </div>
  );
};

export default Home;
