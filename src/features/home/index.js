import { React } from "react";

// Conponent
import {
  IntroSlide,
  CategoriesSlide,
  BrandsSlide,
  NewProducts,
  BannerWrapContainer,
  OutstandingContainer,
  BigBanner,
  ByMeContainer,
  NewsletterSignupForm,
  MarketingContainer,

} from "./containers";

const Home = () => {
  
  return (
    <div className="m-auto">
      <IntroSlide />
      <CategoriesSlide />
      <BrandsSlide />
      <NewProducts/>
      <BannerWrapContainer />
      <OutstandingContainer />
      <BigBanner />
      <ByMeContainer />
      <NewsletterSignupForm />
      <MarketingContainer />
    </div>
  );
};

export default Home;
