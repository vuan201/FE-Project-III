import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { productsApi } from "../../Api";
import {
  fetchIdle,
  fetchLoading,
  fetchSucceeded,
  fetchFailed,
} from "../../config";

// tên reducers
const baseName = "newProducts";

// Async thunks để gọi API
export const fetchNewProducts = createAsyncThunk(
  `${baseName}/fetchNewProducts`,
  async (params) => {
    const response = await productsApi.getAll(params);
    return response;
  }
);

export const newProductsSlice = createSlice({
  name: baseName,

  // các giá trị ban đầu
  initialState: {
    newProducts: [],
    status: fetchIdle,
    error: null,
  },
  reducers: {
    setNewProducts: (state, action) => {
      state.newProducts = action.payload;
    },
    resetNewProducts: (state) => {
      state.error = null;
      state.newProducts = [];
      state.status = fetchIdle;
    },
  },

  // xử lý các action được tạo bởi createAsyncThunk
  // hoặc các action khác không được định nghĩa trong phần reducers của slice.
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewProducts.pending, (state) => {
        state.status = fetchLoading;
      })
      .addCase(fetchNewProducts.fulfilled, (state, action) => {
        state.status = fetchSucceeded;
        state.newProducts = action.payload;
      })
      .addCase(fetchNewProducts.rejected, (state, action) => {
        state.status = fetchFailed;
        state.error = action.error.message;
      });
  },
});

export const { resetNewProducts, setNewProducts } = newProductsSlice.actions;

// đẩy các dữ liệu ra ngoài
export const selectNewProductsItem = (state) => state.newProducts.newProducts;
export const selectNewProductsStatus = (state) => state.newProducts.status;
export const selectNewProductsError = (state) => state.newProducts.error;

export default newProductsSlice.reducer;
