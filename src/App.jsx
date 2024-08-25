import React from "react";
import { Routes, Route } from "react-router";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Header,
  Footer,
  CheckoutResults,
  Login,
  Home,
  Register,
  Collections,
  ProductDetail,
  Carts,
  Checkout,
  PrivacyPolicy,
} from "./features";
import ScrollToTop from "./utils/ScrollToTop";
import "./assets/styles/App.css";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//     children: [
//       { path: "/login", element: <Login /> },
//       { path: "/register", element: <Register /> },
//       {
//         path: "/collections",
//         element: <Collections />,
//         children: [
//           {
//             path: "/collections/:category",
//             element: <Collections />,
//           },
//         ],
//       },
//       {
//         path: "/products/:slug",
//         element: <ProductDetail />,
//       },
//       {
//         path: "/carts",
//         element: <Carts />,
//       },
//       {
//         path: "/checkout",
//         element: <Checkout />,
//       },
//       {
//         path: "/privacy-policy",
//         element: <PrivacyPolicy />,
//       },
//     ],
//   },
// ]);

function App() {
  return (
    <div className={"App bg-gray-50"}>
      <div id="mainContent" className="w-full flex flex-col">
        <Header />
        <div>
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
            <Route path="/checkout/results" element={<CheckoutResults />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/profile" element={<div />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
