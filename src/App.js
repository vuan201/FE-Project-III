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
} from "./features";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <div className={"App bg-transparent"}>
      <Header />
      <div id="mainContent" className="w-full">
        <ScrollToTop />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/collections/:category" element={<Collections />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="/carts" element={<Carts />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
