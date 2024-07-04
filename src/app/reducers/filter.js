import { createSlice } from "@reduxjs/toolkit";

// tên reducers
const baseName = "filters";

export const filtersSlice = createSlice({
  name: baseName,

  // các giá trị ban đầu
  initialState: {
    colors: [],
    price: [],
    sizes: [],
  },
  reducers: {
    // thay thế cho cả add và remove
    handleFilterColors: (state, action) => {
      const result = state.colors.includes(action.payload);

      // nếu không tồn tại màu đó trong bộ lọc, thì sẽ thêm vào
      if (result) {
        const newArray = state.colors.filter((item) => item !== action.payload);
        state.colors = newArray;
      }
      // nếu đã tồn tại màu đó trong bộ lọc thì sẽ xóa bỏ nó đi
      else {
        state.colors.push(action.payload);
      }
    },

    // addFilterPrice: (state, action) => {},
    // removeFilterPrice: (state, action) => {},

    handleFilterSizes: (state, action) => {
      const result = state.sizes.find((element) => element === action.payload);

      // nếu không tồn tại màu đó trong bộ lọc, thì sẽ thêm vào
      if (result !== undefined) {
        state.sizes = state.sizes.push(action.payload);
      }
      // nếu đã tồn tại màu đó trong bộ lọc thì sẽ xóa bỏ nó đi
      else {
        state.sizes = state.sizes.filter((item) => item !== action.payload);
      }
    },

    resetItem: (state) => {
      state.colors = [];
      state.price = [];
      state.sizes = [];
    },
  },
});

export const {
  resetItem,
  handleFilterColors,
  // addFilterPrice,
  // removeFilterPrice,
  handleFilterSizes,
} = filtersSlice.actions;

// đẩy các dữ liệu ra ngoài
export const selectFiltersColors = (state) => state.filters.colors;
export const selectFiltersPrice = (state) => state.filters.price;
export const selectFiltersSizes = (state) => state.filters.sizes;

export default filtersSlice.reducer;
