import { configureStore } from "@reduxjs/toolkit";
// import categoriesSlice from "./reducers/categoriesSlice";
// import brandsSlice from "./reducers/brandsSlice";
// import productsSlice from "./reducers/productsSlice";
// import stylesSlice from "./reducers/stylesSlice";
// import sortSlice from "./reducers/sortSlice";
// import paramsSlice from "./reducers/paramsSlice";
// import sizesSlice from "./reducers/sizesSlice";
// import colorsSlice from "./reducers/colorsSlice";
// import newProductsSlice from "./reducers/newProductsSlice";
// import productDetailSlice from "./reducers/productDetailSlice";
// import quantitySlice from "./reducers/quantitySlice";
// import authSlice from "./reducers/authSlice";

import {
  categoriesSlice,
  brandsSlice,
  productsSlice,
  colorsSlice,
  sizesSlice,
  newProductsSlice,
  productDetailSlice,
  quantitySlice,
  paramsSlice,
  authSlice,
} from "./reducers";

export default configureStore({
  reducer: {
    categories: categoriesSlice,
    brands: brandsSlice,
    products: productsSlice,
    newProducts: newProductsSlice,
    params: paramsSlice,
    colors: colorsSlice,
    sizes: sizesSlice,
    productDetail: productDetailSlice,
    auth:authSlice
  },
});
