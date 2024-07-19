import { createSlice } from "@reduxjs/toolkit";

// tên reducers
const baseName = "filters";

export const filtersSlice = createSlice({
  name: baseName,

  // các giá trị ban đầu
  initialState: {
    params: [],
    colors: [],
    sizes: [],
    price: [0, 5000000],
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

    setFilterPrice: (state, action) => {
      state.price = action.payload;
    },

    handleFilterSizes: (state, action) => {
      const result = state.sizes.includes(action.payload);

      // nếu không tồn tại màu đó trong bộ lọc, thì sẽ thêm vào
      if (result) {
        const newArray = state.sizes.filter((item) => item !== action.payload);
        state.sizes = newArray;
      }
      // nếu đã tồn tại màu đó trong bộ lọc thì sẽ xóa bỏ nó đi
      else {
        state.sizes.push(action.payload);
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
  setFilterPrice,
  handleFilterSizes,
} = filtersSlice.actions;

// đẩy các dữ liệu ra ngoài
export const selectFiltersColors = (state) => state.filters.colors;
export const selectFiltersPrice = (state) => state.filters.price;
export const selectFiltersSizes = (state) => state.filters.sizes;

export default filtersSlice.reducer;
