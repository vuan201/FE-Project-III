import { createSlice } from "@reduxjs/toolkit";

// tên reducers
const baseName = "sort";

export const sortSlice = createSlice({
  name: baseName,

  // các giá trị ban đầu
  initialState: {
    sortList: [
      "Đặc sắc",
      // "Bán chạy nhất",
      "Từ A-Z",
      "Từ Z-A",
      "Giá thấp đến cao",
      "Giá cao đến thấp",
      "Ngày mới đến cũ",
      "Ngày cũ đến mới",
    ],
    presentValue: "Đặc sắc",
  },
  reducers: {
    setPresentValue: (state, action) => {
      state.presentValue = action.payload;
    },
    resetPresentValue: (state) => {
      state.presentValue = "Đặc sắc";
    },
  },
});

export const sortList = (state) => state.sort.sortList;
export const presentValue = (state) => state.sort.presentValue;

export const { setPresentValue, resetPresentValue } = sortSlice.actions;

export default sortSlice.reducer;
