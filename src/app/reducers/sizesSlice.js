import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// tên reducers
const baseName = "sizes";

export const sizesSlice = createSlice({
  name: baseName,

  // các giá trị ban đầu
  initialState: {
    sizes: [
      24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
      42, 43, 44, 45,
    ],
  },
  reducers: {},
});

// đẩy các dữ liệu ra ngoài
export const selectSizes = (state) => state.sizes.sizes;

export default sizesSlice.reducer;
