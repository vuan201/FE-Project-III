import React from "react";
import { Routes, Route } from "react-router";
import "./assets/styles/App.css";
import { Header, Footer } from "./features";
import {
  Login,
  Home,
  Register,
  Collections,
  ProductDetail,
  Carts,
  Checkout,
} from "./features";
import ScrollToTop from "./utils/ScrollToTop";
import PrivacyPolicy from "./features/PrivacyPolicy";

function App() {
  return (
    <div className={"App bg-transparent"}>
      <div id="mainContent" className="w-full">
        <Header />
        <ScrollToTop />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/collections/:category" element={<Collections />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="/carts" element={<Carts />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
