import { configureStore } from "@reduxjs/toolkit";
import {
  categoriesSlice,
  brandsSlice,
  productsSlice,
  stylesSlice,
  sortSlice,
  filtersSlice
} from "./reducers";

export default configureStore({
  reducer: {
    categories: categoriesSlice,
    brands: brandsSlice,
    products: productsSlice,
    styles: stylesSlice,
    sort:sortSlice,
    filters:filtersSlice
  },
});
