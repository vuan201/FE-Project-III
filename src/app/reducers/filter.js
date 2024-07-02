import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { categoriesApi, brandsApi, colorsApi } from "../../Api";

// tên reducers
const baseName = "filters";

// Async thunks để gọi API
export const fetchFilters = createAsyncThunk(
  `${baseName}/fetchFilters`,
  async () => {
    const [categories, brands, colors] = await Promise.all(
      categoriesApi.getAll({}),
      brandsApi.getAll({}),
      colorsApi.getAll({})
    );
    return {
      categories: categories,
      brands: brands,
      colors: colors,
    };
  }
);

export const filtersSlice = createSlice({
  name: baseName,

  // các giá trị ban đầu
  initialState: {
    ilters: {},
    status: "idle",
    error: null,
  },
  reducers: {},

  // xử lý các action được tạo bởi createAsyncThunk
  // hoặc các action khác không được định nghĩa trong phần reducers của slice.
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilters.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFilters.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.filters = action.payload;
      })
      .addCase(fetchFilters.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// đẩy các dữ liệu ra ngoài
export const selectFiltersItem = (state) => state.filters.filters;
export const selectFiltersStatus = (state) => state.filters.status;
export const selectFiltersError = (state) => state.filters.error;

export default filtersSlice.reducer;
