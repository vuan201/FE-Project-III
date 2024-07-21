import { createSlice } from "@reduxjs/toolkit";

// tên reducers
const baseName = "sort";

export const sortSlice = createSlice({
  name: baseName,

  // các giá trị ban đầu
  initialState: {
    sortList: [
      // { key: "FEATURED", value: "Đặc sắc" },
      // { key: "BEST_SELLING", value: "Bán chạy nhất" },
      { key: "A_Z", value: "Từ A-Z", sort: "name", order: "ASC" },
      { key: "Z_A", value: "Từ Z-A", sort: "name", order: "DESC" },
      {
        key: "LOW_IN_HIGH",
        value: "Giá thấp đến cao",
        sort: "price",
        order: "ASC",
      },
      {
        key: "HIGH_IN_LOW",
        value: "Giá cao đến thấp",
        sort: "price",
        order: "DESC",
      },
      {
        key: "OLD_TO_NEW",
        value: "Ngày mới đến cũ",
        sort: "createdAt",
        order: "ASC",
      },
      {
        key: "NEW_TO_OLD",
        value: "Ngày cũ đến mới",
        sort: "createdAt",
        order: "DESC",
      },
    ],
    presentValue: { key: "A_Z", value: "Từ A-Z", sort: "name", order: "ASC" },
  },
  reducers: {
    setPresentValue: (state, action) => {
      state.presentValue = action.payload;
    },
    resetPresentValue: (state) => {
      state.presentValue = state.sortList[0];
    },
  },
});

export const sortList = (state) => state.sort.sortList;
export const presentValue = (state) => state.sort.presentValue;

export const { setPresentValue, resetPresentValue } = sortSlice.actions;

export default sortSlice.reducer;
