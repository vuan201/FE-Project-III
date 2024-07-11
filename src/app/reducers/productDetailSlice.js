import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { productsApi } from "../../Api";

// tên reducers
const baseName = "productDetail";

// Async thunks để gọi API
export const fetchProduct = createAsyncThunk(
  `${baseName}/fetchProduct`,
  async (query) => {
    const response = await productsApi.get(query);
    return response;
  }
);

export const productDetailSlice = createSlice({
  name: baseName,

  // các giá trị ban đầu
  initialState: {
    productDetail: {},
    selectorOption: {},
    selectorColor: "",
    selectorSize: "",
    status: "idle",
    error: null,
  },
  reducers: {
    setSelectorOption: (state, action) => {
      state.selectorOption = action.payload;
    },
    handleSelectorColor: (state, action) => {
      state.selectorColor !== action.payload
        ? (state.selectorColor = action.payload)
        : (state.selectorColor = "");
    },
    handleSelectorSize: (state, action) => {
      state.selectorSize !== action.payload
        ? (state.selectorSize = action.payload)
        : (state.selectorSize = "");
    },
    resetProduct: (state) => {
      state.productDetail = {};
      state.selectorOption = {};
      state.selectorColor = "";
      state.selectorSize = "";
      state.error = null;
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
        state.productDetail = action.payload[0];
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const {
  resetProduct,
  setSelectorOption,
  handleSelectorColor,
  handleSelectorSize,
} = productDetailSlice.actions;

// đẩy các dữ liệu ra ngoài
export const selectProductItem = (state) => state.productDetail.productDetail;
export const selectorOption = (state) => state.productDetail.selectorOption;
export const selectorColor = (state) => state.productDetail.selectorColor;
export const selectorSize = (state) => state.productDetail.selectorSize;
export const selectProductStatus = (state) => state.productDetail.status;
export const selectProductError = (state) => state.productDetail.error;

export default productDetailSlice.reducer;
