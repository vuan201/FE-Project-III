import { configureStore } from "@reduxjs/toolkit";

import {
  categoriesSlice,
  brandsSlice,
  productsSlice,
  colorsSlice,
  sizesSlice,
  newProductsSlice,
  productDetailSlice,
  paramsSlice,
  authSlice,
  cartsSlice,
  orderSlice,
  AddressListSlice,
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
    auth: authSlice,
    carts: cartsSlice,
    order: orderSlice,
    addressList: AddressListSlice,
  },
});
