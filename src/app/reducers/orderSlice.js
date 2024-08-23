import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { OrdersApi } from "../../Api";
import {
  fetchFailed,
  fetchIdle,
  fetchLoading,
  fetchSucceeded,
} from "../../config";
import { productNameConnection } from "../../utils/productNameConnection";

// tên reducers
const baseName = "order";

export const addOrders = createAsyncThunk(
  `${baseName}/addOrders`,

  async (order) => {
    let newOrderItem = [];
    let response;
    if (Array.isArray(order.items) && order.items.length > 0) {
      newOrderItem = order.items.map(({ sku, quantity }) => {
        return { sku: sku, quantity: quantity };
      });
      order.items = newOrderItem;
    }

    try {
      response = await OrdersApi.add(order);
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
    addressId: 0,
    address: {
      city: "",
      district: "",
      ward: "",
      specificAddress: "",
    },

    paymentMethod: {
      name: "COD",
      provider: null,
    },
    phoneNumber: "",
    fullName: "",
    voucher: null,

    status: fetchIdle,
    error: null,

    vnPayResult: {
      Message: "",
      PaymentUrl: "",
      StatusCode: "",
    },
  },

  reducers: {
    setOrderItems: (state, action) => {
      const newItem = action.payload.map(
        ({ sku, imageUrl, name, quantity, price, color, size }) => {
          return {
            sku,
            imageUrl,
            name: productNameConnection(name, color, size),
            quantity,
            price,
          };
        }
      );
      state.items = newItem;
    },
    setAddressId: (state, action) => {
      state.addressId = action.payload;
    },
    setOrderAddress: (state, action) => {
      state.address = action.payload;
    },
    setPaymentMethodName: (state, action) => {
      state.paymentMethod.name = action.payload;
    },
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
    setFullName: (state, action) => {
      state.fullName = action.payload;
    },
    setOrderCity: (state, action) => {
      state.address.city = action.payload;
    },
    setOrderDistrict: (state, action) => {
      state.address.district = action.payload;
    },
    setOrderWard: (state, action) => {
      state.address.ward = action.payload;
    },
    setOrderSpecificAddress: (state, action) => {
      state.address.specificAddress = action.payload;
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
      // Xóa nhiều
      if (Array.isArray(action.payload)) {
        const newOrderItem = state.items.filter((item) =>
          action.payload.some((orderItem) => item.sku !== orderItem.sku)
        );
        state.items = newOrderItem;
        return;
      }

      // Xóa một
      if (state.items.some((item) => item.sku === action.payload)) {
        const newOrderItem = state.items.filter(
          (item) => item.sku !== action.payload
        );
        state.items = newOrderItem;
      }
    },
    resetOrderItem: (state) => {
      state.items = [];
    },
    resetOrder: (state) => {
      state.items = [];
      state.address = {
        city: "",
        district: "",
        ward: "",
        specificAddress: "",
      };
      state.paymentMethod = {
        name: "COD",
        provider: null,
      };

      state.addressId = 0;
      state.phoneNumber = "";
      state.fullName = "";
      state.vnPayResult = {
        Message: "",
        PaymentUrl: "",
        StatusCode: "",
      };

      state.status = fetchIdle;
      state.voucher = null;
      state.error = null;
    },
  },

  // xử lý các action được tạo bởi createAsyncThunk
  // hoặc các action khác không được định nghĩa trong phần reducers của slice.
  extraReducers: (builder) => {
    builder
      .addCase(addOrders.pending, (state) => {
        state.status = fetchLoading;
      })
      .addCase(addOrders.fulfilled, (state, action) => {
        state.status = fetchSucceeded;
        state.vnPayResult.Message = action.payload.Message ?? "";
        state.vnPayResult.PaymentUrl = action.payload.PaymentUrl ?? "";
        state.vnPayResult.StatusCode = action.payload.StatusCode ?? "";
      })
      .addCase(addOrders.rejected, (state, action) => {
        state.status = fetchFailed;
        state.error = action.error.message;
      });
  },
});

export const {
  setOrderItems,
  setAddressId,
  setOrderAddress,
  setPaymentMethodName,
  handleMutateOrderItems,
  setOrderQuantity,
  removeOrderItem,
  setPhoneNumber,
  setOrderCity,
  setOrderDistrict,
  setOrderWard,
  setOrderSpecificAddress,
  setFullName,
  resetOrderItem,
  resetOrder,
} = orderSlice.actions;

// đẩy các dữ liệu ra ngoài
export const selectOrderItems = (state) => state.order.items;
export const selectOrderAddress = (state) => state.order.address;
export const selectOrderAddressId = (state) => state.order.addressId;
export const selectOrderPhoneNumber = (state) => state.order.phoneNumber;
export const selectOrderFullName = (state) => state.order.fullName;
export const selectOrderPaymentMethod = (state) => state.order.paymentMethod;
export const selectOrderVnPayResult = (state) => state.order.vnPayResult;

export const selectOrderVoucher = (state) => state.order.voucher;
export const selectOrderStatus = (state) => state.order.status;
export const selectOrderError = (state) => state.order.error;

export default orderSlice.reducer;
