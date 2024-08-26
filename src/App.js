import { Routes, Route } from "react-router";
import "./assets/styles/App.css";
import { Header, Footer } from "./features";
import { Login, Home, Register, Collections, ProductDetail } from "./features";
import ScrollToTop from "./utils/ScrollToTop";
import Carts from "./features/Carts";
import WarrantyPolicy from "./features/WarrantyPolicy";
import PrivacyPolicy from "./features/PrivacyPolicy";
import PaymentPolicy from "./features/PaymentPolicy";
import DeliveryPolicy from "./features/DeliveryPolicy";

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
          <Route path="/warranty-policy" element={<WarrantyPolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/payment-policy" element={<PaymentPolicy />} />
          <Route path="/delivery-policy" element={<DeliveryPolicy />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
