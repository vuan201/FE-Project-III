import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { cartsApi } from "../../Api";

// tên reducers
const baseName = "carts";

// Async thunks để gọi API
export const fetchCarts = createAsyncThunk(
  `${baseName}/fetchCarts`,
  async (params) => {
    const response = await cartsApi.getAll(params);
    return response;
  }
);

export const cartsSlice = createSlice({
  name: baseName,

  // các giá trị ban đầu
  initialState: {
    carts: localStorage.getItem("carts") ?? [],
    status: "idle",
    error: null,
  },
  reducers: {
    addItemToCart: (state, action) => {
      if (state.carts.some((cart) => cart === action.payload)) {
        const newCarts = state.carts.map((item) => {
          if (item.sky === action.payload.sky) {
            item.quantity = action.payload.quantity;
          }
        });
        state.carts = newCarts;
      } else {
        state.carts.push(action.payload);
      }
      localStorage.setItem("carts", state.carts);
    },
    removeItemToCart: (state, action) => {
      if (state.carts.some((cart) => cart === action.payload)) {
        state.carts = state.carts.filter(
          (cart) => cart.sku !== action.payload.sku
        );
        localStorage.setItem("carts", state.carts);
      }
    },
  },

  // xử lý các action được tạo bởi createAsyncThunk
  // hoặc các action khác không được định nghĩa trong phần reducers của slice.
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCarts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.carts = action.payload;
      })
      .addCase(fetchCarts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// đẩy các dữ liệu ra ngoài
export const selectCartsItem = (state) => state.carts.carts;
export const selectCartsStatus = (state) => state.carts.status;
export const selectCartsError = (state) => state.carts.error;

export default cartsSlice.reducer;
