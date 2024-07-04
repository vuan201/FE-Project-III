import { configureStore } from "@reduxjs/toolkit";
import {
  categoriesSlice,
  brandsSlice,
  productsSlice,
  stylesSlice,
  sortSlice,
  filtersSlice,
  colorsSlice,
} from "./reducers";

export default configureStore({
  reducer: {
    categories: categoriesSlice,
    brands: brandsSlice,
    products: productsSlice,
    styles: stylesSlice,
    sort: sortSlice,
    filters: filtersSlice,
    colors: colorsSlice,
  },
});
