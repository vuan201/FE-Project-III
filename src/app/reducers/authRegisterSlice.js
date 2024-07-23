import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authApi } from "../../Api";
import Cookies from "js-cookie";
import { getTimeByToken } from "../../utils/getTimeByToken";
// tên reducers
const baseame = "authRegister";

const authRegisterSlice = createSlice({
  name: baseame,
  initialState: {
    infomation: {
      name: "",
      email: "",
      phone: "",
      password: "",
      passwordComfirmation: "",
    },
    error: null,
  },
  reducers: {
    setName: (state, action) => {
      state.infomation.name = action.payload;
    },
    setEmail: (state, action) => {
      state.infomation.email = action.payload;
    },
    setPhone: (state, action) => {
      state.infomation.phone = action.payload;
    },
    setPassword: (state, action) => {
      state.infomation.password = action.payload;
    },
    setPasswordComfirmation: (state, action) => {
      state.infomation.passwordComfirmation = action.payload;
    },
  },
});

export const {
  setName,
  setEmail,
  setPhone,
  setPassword,
  setPasswordComfirmation,
} = authRegisterSlice.actions;

// đẩy các dữ liệu ra ngoài
export const selectAuthRegisterInfomation = (state) =>
  state.authRegister.infomation;
export const selectAuthRegisterError = (state) => state.authRegister.error;

export default authRegisterSlice.reducer;
