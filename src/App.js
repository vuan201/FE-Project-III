import { Routes, Route } from "react-router";
import "./assets/styles/App.css";
import { Header, Footer } from "./features";
import { Login, Home, Register, Collections, ProductDetail } from "./features";
import ScrollToTop from "./utils/ScrollToTop";
import Carts from "./features/Carts";
import PrivacyPolicy from "./features/PrivacyPolicy";
import ReturnPolicy from "./features/ReturnPolicy";
import SelectSize from "./features/SelectSize";

function App() {
  return (
    <div className={"App bg-transparent"}>
      <Header />
      <div id="mainContent" className="w-full">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/collections/:category" element={<Collections />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="/cart" element={<Carts />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/return-policy" element={<ReturnPolicy />} />
          <Route path="/select-size" element={<SelectSize />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
