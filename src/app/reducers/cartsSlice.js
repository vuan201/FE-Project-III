import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { cartsApi } from "../../Api";
import {
  fetchFailed,
  fetchIdle,
  fetchLoading,
  fetchSucceeded,
} from "../../config";

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

export const updateCartItems = createAsyncThunk(
  `${baseName}/updateCartItems`,

  async (cartItems) => {
    let newCartItems = [];
    let response;

    if (Array.isArray(cartItems) && cartItems.length > 0)
      newCartItems = cartItems.map(({ sku, quantity }) => {
        return { sku, quantity };
      });

    try {
      response = await cartsApi.update(newCartItems);
    } catch (error) {
      console.log(error);
    }

    return response;
  }
);

export const cartsSlice = createSlice({
  name: baseName,

  // các giá trị ban đầu
  initialState: {
    // carts: [],
    cartItems: JSON.parse(localStorage.getItem("carts")) ?? [],
    // carts: localStorage.removeItem("carts") ?? [],
    status: fetchIdle,
    error: null,
  },

  reducers: {
    setCarts: (state, action) => {
      state.cartItems = action.payload;
    },
    addItemToCart: (state, action) => {
      if (state.cartItems.some((cart) => cart.sku === action.payload.sku)) {
        const newCarts = state.cartItems.map((cart) => {
          if (cart.sku === action.payload.sku)
            cart.quantity += action.payload.quantity;
          return cart;
        });
        state.cartItems = newCarts;
      } else {
        state.cartItems.push(action.payload);
      }

      localStorage.setItem("carts", JSON.stringify(state.cartItems ?? []));
    },
    removeItemToCart: (state, action) => {
      if (state.cartItems.some((cart) => cart.sku === action.payload)) {
        state.cartItems = state.cartItems.filter(
          (cart) => cart.sku !== action.payload
        );
        localStorage.setItem("carts", JSON.stringify(state.cartItems ?? []));
      }
    },
    setQuantity: (state, action) => {
      if (state.cartItems.some((cart) => cart.sku === action.payload.sku)) {
        let newCartItems;

        if (action.payload.quantity === 0) {
          newCartItems = state.cartItems.filter(
            (item) => item.sku !== action.payload.sku
          );
        } else {
          newCartItems = state.cartItems.map((cart) => {
            if (cart.sku === action.payload.sku)
              cart.quantity = action.payload.quantity;
            return cart;
          });
        }

        state.cartItems = newCartItems;
        localStorage.setItem("carts", JSON.stringify(state.cartItems ?? []));
      }
    },
    resetCartStatus: (state) => {
      state.status = fetchIdle;
    },
  },

  // xử lý các action được tạo bởi createAsyncThunk
  // hoặc các action khác không được định nghĩa trong phần reducers của slice.
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarts.pending, (state) => {
        state.status = fetchLoading;
      })
      .addCase(fetchCarts.fulfilled, (state, action) => {
        state.status = fetchSucceeded;
        state.cartItems = action.payload.items;
        localStorage.setItem("carts", JSON.stringify(state.cartItems ?? []));
      })
      .addCase(fetchCarts.rejected, (state, action) => {
        state.status = fetchFailed;
        state.error = action.error.message;
      })
      .addCase(updateCartItems.pending, (state) => {
        state.status = fetchLoading;
      })
      .addCase(updateCartItems.fulfilled, (state, action) => {
        state.status = fetchSucceeded;
        state.cartItems = action.payload.items;
        localStorage.setItem("carts", JSON.stringify(state.cartItems ?? []));
      })
      .addCase(updateCartItems.rejected, (state, action) => {
        state.status = fetchFailed;
        state.error = action.error.message;
      });
  },
});

export const {
  addItemToCart,
  removeItemToCart,
  setQuantity,
  setCarts,
  resetCartStatus,
} = cartsSlice.actions;

// đẩy các dữ liệu ra ngoài
export const selectCartsItem = (state) => state.carts.cartItems;
export const selectCartsStatus = (state) => state.carts.status;
export const selectCartsError = (state) => state.carts.error;

export default cartsSlice.reducer;
