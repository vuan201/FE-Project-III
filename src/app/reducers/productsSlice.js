import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { productsApi } from "../../Api";

// tên reducers
const baseName = "products";

// Async thunks để gọi API
export const fetchProducts = createAsyncThunk(
  `${baseName}/fetchProducts`,
  async (params) => {
    const response = await productsApi.getAll(params);
    return response;
  }
);

export const productsSlice = createSlice({
  name: baseName,

  // các giá trị ban đầu
  initialState: {
    products: [],
    status: "idle",
    error: null,
  },
  reducers: {
    resetProducts: (state) => {
      state.error = null;
      state.products = [];
      state.status = "idle";
    },
  },

  // xử lý các action được tạo bởi createAsyncThunk
  // hoặc các action khác không được định nghĩa trong phần reducers của slice.
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { resetProducts } = productsSlice.actions;

// đẩy các dữ liệu ra ngoài
export const selectProductsItem = (state) => state.products.products;
export const selectProductsStatus = (state) => state.products.status;
export const selectProductsError = (state) => state.products.error;

export default productsSlice.reducer;
