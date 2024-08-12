import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { OrdersApi } from "../../Api";
import {
  fetchFailed,
  fetchIdle,
  fetchLoading,
  fetchSucceeded,
} from "../../config";

// tên reducers
const baseName = "order";

export const addOrders = createAsyncThunk(
  `${baseName}/addOrders`,

  async (order) => {
    let newOrderItem = [];
    let response;

    if (Array.isArray(order.items) && order.items.length > 0)
      newOrderItem = order.items.map(({ sku, quantity }) => {
        return { sku: sku, quantity: quantity };
      });

    try {
      response = await OrdersApi.add(newOrderItem);
    } catch (error) {
      console.log(error);
    }

    return response;
  }
);

export const orderSlice = createSlice({
  name: baseName,

  // các giá trị ban đầu
  initialState: {
    items: [],
    address: {
      city: "",
      district: "",
      ward: "",
      specificAddress: "",
    },
    paymentMethod: {
      name: "",
      provider: null,
    },
    voucher: null,
    status: fetchIdle,
    error: null,
  },

  reducers: {
    setOrder: (state, action) => {
      state.order = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setPaymentMethod: (state, action) => {
      state.address = action.payload;
    },
    handleMutateOrderItems: (state, action) => {
      if (state.items.some((item) => item.sku === action.payload.sku)) {
        state.items = state.items.filter(
          (item) => item.sku !== action.payload.sku
        );
      } else {
        state.items.push(action.payload);
      }
    },
    setOrderQuantity: (state, action) => {
      if (state.items.some((item) => item.sku === action.payload.sku)) {
        let newItems = {};
        if (action.payload.quantity === 0) {
          newItems = state.items.filter(
            (item) => item.sku !== action.payload.sku
          );
        } else {
          newItems = state.items.map((item) => {
            if (item.sku === action.payload.sku)
              item.quantity = action.payload.quantity;
            return item;
          });
        }

        state.items = newItems;
      }
    },
    removeOrderItem: (state, action) => {
      if (state.items.some((item) => item.sku === action.payload)) {
        const newOrderItem = state.items.filter(
          (item) => item.sku !== action.payload
        );
        state.items = newOrderItem;
      }
    },
    resetOrder: (state) => {
      state.status = fetchIdle;
      state.voucher = null;
      state.items = [];
      state.address = {
        city: "",
        district: "",
        specificAddress: "",
      };
      state.paymentMethod = {
        name: "",
        provider: null,
      };
      state.error = null;
    },
  },

  // xử lý các action được tạo bởi createAsyncThunk
  // hoặc các action khác không được định nghĩa trong phần reducers của slice.
  extraReducers: (builder) => {},
});

export const {
  setOrder,
  setAddress,
  setPaymentMethod,
  handleMutateOrderItems,
  setOrderQuantity,
  removeOrderItem,
  resetOrder,
} = orderSlice.actions;

// đẩy các dữ liệu ra ngoài
export const selectOrderItems = (state) => state.order.items;
export const selectOrderAddress = (state) => state.order.address;
export const selectOrderPaymentMethod = (state) => state.order.paymentMethod;
export const selectOrderVoucher = (state) => state.order.voucher;
export const selectOrderStatus = (state) => state.order.status;
export const selectOrderError = (state) => state.order.error;

export default orderSlice.reducer;
