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
} from "../../features";

// Banner Image
import "./Home.css";
import MarketingContainer from "../../features/home/components/MarketingContainer";

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
      <MarketingContainer/>
      <LibraryStyles />
    </div>
  );
};

export default Home;
