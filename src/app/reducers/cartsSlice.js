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

export const updateCartItems = createAsyncThunk(
  `${baseName}/updateCartItems`,

  async (cartItems) => {
    let newCartItems = [];
    let response;

    if (Array.isArray(cartItems) && cartItems.length > 0)
      newCartItems = cartItems.map(({ sku, quantity }) => {
        return { sku: sku, quantity: quantity };
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
    carts: JSON.parse(localStorage.getItem("carts")) ?? [],
    // carts: localStorage.removeItem("carts") ?? [],
    status: "idle",
    error: null,
  },

  reducers: {
    setCarts: (state, action) => {
      state.carts = action.payload;
    },
    addItemToCart: (state, action) => {
      if (state.carts.some((cart) => cart.sku === action.payload.sku)) {
        if (Array.isArray(state.carts) && state.carts.length > 1) {
          const newCarts = state.carts.map((cart) => {
            if (cart.sku === action.payload.sku)
              cart.quantity += action.payload.quantity;
            return cart;
          });
          state.carts = newCarts;
        } else {
          if (state.carts[0].sku === action.payload.sku) {
            state.carts[0].quantity += action.payload.quantity;
          }
        }
      } else {
        state.carts.push(action.payload);
      }

      localStorage.setItem("carts", JSON.stringify(state.carts ?? []));
    },
    removeItemToCart: (state, action) => {
      if (state.carts.some((cart) => cart.sku === action.payload)) {
        state.carts = state.carts.filter((cart) => cart.sku !== action.payload);
        localStorage.setItem("carts", JSON.stringify(state.carts ?? []));
      }
    },
    setQuantity: (state, action) => {
      if (state.carts.some((cart) => cart.sku === action.payload.sku)) {
        if (state.carts.length > 1) {
          state.carts.map((cart) => {
            if (cart.sku === action.payload.sku)
              cart.quantity = action.payload.quantity;
            return cart;
          });
        } else {
          if (state.carts[0].sku === action.payload.sku)
            state.carts[0].quantity = action.payload.quantity;
        }
        localStorage.setItem("carts", JSON.stringify(state.carts ?? []));
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
        state.carts = action.payload.items;
        localStorage.setItem("carts", JSON.stringify(state.carts ?? []));
      })
      .addCase(fetchCarts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateCartItems.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateCartItems.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.carts = action.payload.items;
        localStorage.setItem("carts", JSON.stringify(state.carts ?? []));
      })
      .addCase(updateCartItems.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addItemToCart, removeItemToCart, setQuantity, setCarts } =
  cartsSlice.actions;

// đẩy các dữ liệu ra ngoài
export const selectCartsItem = (state) => state.carts.carts;
export const selectCartsStatus = (state) => state.carts.status;
export const selectCartsError = (state) => state.carts.error;

export default cartsSlice.reducer;
