import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { stylesApi } from "../../Api";

// tên reducers
const baseName = "styles";

// Async thunks để gọi API
export const fetchStyles = createAsyncThunk(
  `${baseName}/fetchStyles`,
  async (params) => {
    const response = await stylesApi.getAll(params);
    return response;
  }
);

export const styles = createSlice({
  name: baseName,

  // các giá trị ban đầu
  initialState: {
    styles: [],
    status: "idle",
    error: null,
  },
  reducers: {},

  // xử lý các action được tạo bởi createAsyncThunk
  // hoặc các action khác không được định nghĩa trong phần reducers của slice.
  extraReducers: (builder) => {
    builder
      .addCase(fetchStyles.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchStyles.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.styles = action.payload;
      })
      .addCase(fetchStyles.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// đẩy các dữ liệu ra ngoài
export const selectStylesItem = (state) => state.styles.styles;
export const selectStylesStatus = (state) => state.styles.status;
export const selectStylesError = (state) => state.styles.error;

export default styles.reducer;
