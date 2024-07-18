import { configureStore } from "@reduxjs/toolkit";
// import categoriesSlice from "./reducers/categoriesSlice";
// import brandsSlice from "./reducers/brandsSlice";
// import productsSlice from "./reducers/productsSlice";
// import stylesSlice from "./reducers/stylesSlice";
// import sortSlice from "./reducers/sortSlice";
// import filtersSlice from "./reducers/filtersSlice";
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
  stylesSlice,
  sortSlice,
  colorsSlice,
  sizesSlice,
  newProductsSlice,
  productDetailSlice,
  quantitySlice,
  authSlice,
  filtersSlice,
} from "./reducers";

export default configureStore({
  reducer: {
    categories: categoriesSlice,
    brands: brandsSlice,
    products: productsSlice,
    newProducts: newProductsSlice,
    styles: stylesSlice,
    sort: sortSlice,
    filters: filtersSlice,
    colors: colorsSlice,
    sizes: sizesSlice,
    productDetail: productDetailSlice,
    quantity: quantitySlice,
    auth: authSlice,
  },
});
