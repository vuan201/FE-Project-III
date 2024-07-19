import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authApi } from "../../Api";
import Cookies from "js-cookie";
import { getTimeByToken } from "../../utils/getTimeByToken";
// tên reducers
const baseame = "auth";

export const login = createAsyncThunk(
  `${baseame}/login`,
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await authApi.login(credentials);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: baseame,
  initialState: {
    token: Cookies.get("token") ?? null,
    // user: null,
    status: "idle",
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.token = null;
      state.error = null;
      state.status = "idle";
      Cookies.remove("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.token = action.payload.token;
        Cookies.set(
          "token",
          action.payload.token,
          getTimeByToken(action.payload.token)
        );
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;

// đẩy các dữ liệu ra ngoài
export const selectAuthToken = (state) => state.auth.token;
export const selectAuthStatus = (state) => state.auth.status;
export const selectAuthError = (state) => state.auth.error;

export default authSlice.reducer;
