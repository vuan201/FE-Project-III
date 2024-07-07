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
  LibraryStyles,
  NewsletterSignupForm,
  MarketingContainer,

} from "./containers";

// Banner Image
import "./Home.css";

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
      {/* <LibraryStyles /> */}
    </div>
  );
};

export default Home;
