import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { productsApi } from "../../Api";

// tên reducers
const baseName = "product";

// Async thunks để gọi API
export const fetchProduct = createAsyncThunk(
  `${baseName}/fetchProduct`,
  async (slug) => {
    const response = await productsApi.get(slug);
    return response;
  }
);

export const productDetailSlice = createSlice({
  name: baseName,

  // các giá trị ban đầu
  initialState: {
    productDetail: {},
    selectorOption: {},
    status: "idle",
    error: null,
  },
  reducers: {
    setProduct: (state, action) => {
      state.productDetail = action.payload;
    },
    setSelectorOption: (state, action) => {
      state.selectorOption = action.payload;
    },
    resetProduct: (state) => {
      state.error = null;
      state.productDetail = {};
      state.selectorOption = {};
      state.status = "idle";
    },
  },

  // xử lý các action được tạo bởi createAsyncThunk
  // hoặc các action khác không được định nghĩa trong phần reducers của slice.
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.productDetail = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { resetProduct, setProduct, setSelectorOption } = productDetailSlice.actions;

// đẩy các dữ liệu ra ngoài
export const selectProductItem = (state) => state.productDetail.productDetail;
export const selectorOption = (state) => state.productDetail.selectorOption;
export const selectProductStatus = (state) => state.productDetail.status;
export const selectProductError = (state) => state.productDetail.error;

export default productDetailSlice.reducer;
