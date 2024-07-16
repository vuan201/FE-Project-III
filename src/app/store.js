import { configureStore } from "@reduxjs/toolkit";
import {
  categoriesSlice,
  brandsSlice,
  productsSlice,
  stylesSlice,
  sortSlice,
  filtersSlice,
  colorsSlice,
  sizesSlice,
  newProductsSlice,
  productDetailSlice,
  quantitySlice,
  authSlice,
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
