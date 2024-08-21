import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { categoriesApi } from "../../Api";

import {
  fetchIdle,
  fetchLoading,
  fetchSucceeded,
  fetchFailed,
} from "../../config";

// tên reducers
const baseName = "categories";

// Async thunks để gọi API
export const fetchCategories = createAsyncThunk(
  `${baseName}/fetchCategories`,
  async (params) => {
    const response = await categoriesApi.getAll(params);
    return response;
  }
);
export const fetchCategory = createAsyncThunk(
  `${baseName}/fetchCategory`,
  async (slug) => {
    const response = await categoriesApi.get(slug);
    return response;
  }
);

export const categoriesSlice = createSlice({
  name: baseName,

  // các giá trị ban đầu
  initialState: {
    categories: [],
    category: {},
    status: fetchIdle,
    error: null,
  },
  reducers: {},

  // xử lý các action được tạo bởi createAsyncThunk
  // hoặc các action khác không được định nghĩa trong phần reducers của slice.
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = fetchLoading;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = fetchSucceeded;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = fetchFailed;
        state.error = action.error.message;
      })
      .addCase(fetchCategory.pending, (state) => {
        state.status = fetchLoading;
      })
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.status = fetchSucceeded;
        state.category = action.payload;
      })
      .addCase(fetchCategory.rejected, (state, action) => {
        state.status = fetchFailed;
        state.error = action.error.message;
      });
  },
});

// đẩy các dữ liệu ra ngoài
export const selectCategoriesItem = (state) => state.categories.categories;
export const selectCategory = (state) => state.categories.category;
export const selectCategoriesStatus = (state) => state.categories.status;
export const selectCategoriesError = (state) => state.categories.error;

export default categoriesSlice.reducer;
