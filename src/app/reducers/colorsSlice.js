import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { colorsApi } from "../../Api";
import {
  fetchIdle,
  fetchLoading,
  fetchSucceeded,
  fetchFailed,
} from "../../config";

// tên reducers
const baseName = "colors";

// Async thunks để gọi API
export const fetchColors = createAsyncThunk(
  `${baseName}/fetchColors`,
  async (params) => {
    const response = await colorsApi.getAll(params);
    return response;
  }
);

export const colorsSlice = createSlice({
  name: baseName,

  // các giá trị ban đầu
  initialState: {
    colors: [],
    status: fetchIdle,
    error: null,
  },
  reducers: {},

  // xử lý các action được tạo bởi createAsyncThunk
  // hoặc các action khác không được định nghĩa trong phần reducers của slice.
  extraReducers: (builder) => {
    builder
      .addCase(fetchColors.pending, (state) => {
        state.status = fetchLoading;
      })
      .addCase(fetchColors.fulfilled, (state, action) => {
        state.status = fetchSucceeded;
        state.colors = action.payload;
      })
      .addCase(fetchColors.rejected, (state, action) => {
        state.status = fetchFailed;
        state.error = action.error.message;
      });
  },
});

// đẩy các dữ liệu ra ngoài
export const selectColorsItem = (state) => state.colors.colors;
export const selectColorsStatus = (state) => state.colors.status;
export const selectColorsError = (state) => state.colors.error;

export default colorsSlice.reducer;
