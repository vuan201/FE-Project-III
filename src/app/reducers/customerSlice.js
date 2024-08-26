import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { customerAddressesApi, customerApi } from "../../Api";
import {
  fetchIdle,
  fetchLoading,
  fetchSucceeded,
  fetchFailed,
} from "../../config";

// tên reducers
const baseName = "customer";

// Async thunks để gọi API
export const fetchCustomerInfomations = createAsyncThunk(
  `${baseName}/fetchCustomerInfomations`,
  async () => {
    const response = await customerApi.getInfomations();
    return response;
  }
);

export const fetchCustomerAddresses = createAsyncThunk(
  `${baseName}/fetchCustomerAddresses`,
  async () => {
    const response = await customerAddressesApi.getAddresses();
    return response;
  }
);

export const customerSlice = createSlice({
  name: baseName,

  // các giá trị ban đầu
  initialState: {
    name: "",
    email: "",
    phone: "",
    addresses: [],

    status: fetchIdle,
    error: null,
  },
  reducers: {},

  // xử lý các action được tạo bởi createAsyncThunk
  // hoặc các action khác không được định nghĩa trong phần reducers của slice.
  extraReducers: (builder) => {
    builder
      .addCase(fetchCustomerInfomations.pending, (state) => {
        state.status = fetchLoading;
      })
      .addCase(fetchCustomerInfomations.fulfilled, (state, action) => {
        state.status = fetchSucceeded;
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.phone = action.payload.phone;
      })
      .addCase(fetchCustomerInfomations.rejected, (state, action) => {
        state.status = fetchFailed;
        state.error = action.error.message;
      })
      .addCase(fetchCustomerAddresses.pending, (state) => {
        state.status = fetchLoading;
      })
      .addCase(fetchCustomerAddresses.fulfilled, (state, action) => {
        state.status = fetchSucceeded;
        state.addresses = action.payload;
      })
      .addCase(fetchCustomerAddresses.rejected, (state, action) => {
        state.status = fetchFailed;
        state.error = action.error.message;
      });
  },
});

// đẩy các dữ liệu ra ngoài
export const selectCustomerName = (state) => state.customer.name;
export const selectCustomerPhone = (state) => state.customer.phone;
export const selectCustomerEmail = (state) => state.customer.email;
export const selectCustomerAddresses = (state) => state.customer.addresses;

export const selectCustomerStatus = (state) => state.customer.status;
export const selectCustomerError = (state) => state.customer.error;

export default customerSlice.reducer;
