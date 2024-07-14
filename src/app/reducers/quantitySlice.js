import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// tên reducers
const baseName = "quantity";

export const quantitySlice = createSlice({
  name: baseName,

  // các giá trị ban đầu
  initialState: {
    quantity: 1,
  },
  reducers: {
    increase: (state) => {
      state.quantity += 1;
    },
    decrement: (state) => {
      if (state.quantity > 1) state.quantity -= 1;
    },
    setQuantity: (state, action) => {
      if (action.payload > 1 && action.payload < 100) state.quantity = action.payload;
      else if (action.payload > 100) state.quantity = 99;
      else state.quantity = 1;
    },
    resetQuantity: (state) => {
      state.quantity = 1;
    },
  },
});

export const { increase, decrement, setQuantity, resetQuantity } =
  quantitySlice.actions;

// đẩy các dữ liệu ra ngoài
export const selectQuantity = (state) => state.quantity.quantity;

export default quantitySlice.reducer;
