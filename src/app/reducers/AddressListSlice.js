import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addressListApi } from "../../Api";
import {
  fetchIdle,
  fetchLoading,
  fetchSucceeded,
  fetchFailed,
} from "../../config";

// tên reducers
const baseName = "addressList";

export const fetchCity = createAsyncThunk(
  `${baseName}/fetchCity`,
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await addressListApi.getAllCity();
      return data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchDistrict = createAsyncThunk(
  `${baseName}/fetchDistrict`,
  async (cityId, { rejectWithValue }) => {
    try {
      const { data } = await addressListApi.getAllDistrictByCityId(cityId);
      return data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchWard = createAsyncThunk(
  `${baseName}/fetchWard`,
  async (districtId, { rejectWithValue }) => {
    try {
      const { data } = await addressListApi.getAllWardByDistrictId(districtId);
      return data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addressListSlice = createSlice({
  name: baseName,

  initialState: {
    listCity: [],
    listDistrict: [],
    listWard: [],

    selectCity: "",
    selectDistrict: "",
    selectWard: "",

    status: fetchIdle,
    error: null,
  },

  // Actions
  reducers: {
    setSelectCity: (state, action) => {
      state.selectCity = action.payload;
    },
    setSelectDistrict: (state, action) => {
      state.selectDistrict = action.payload;
    },
    setSelectWard: (state, action) => {
      state.selectWard = action.payload;
    },

    resetAddressList: (state) => {
      state.listCity = [];
      state.listDistrict = [];
      state.listWard = [];

      state.status = fetchIdle;
      state.error = null;
    },
    resetListWard: (state) => {
      state.listWard = [];
    },
    resetAddressStatus: (state) => {
      state.status = fetchIdle;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCity.pending, (state) => {
        state.status = fetchLoading;
      })
      .addCase(fetchCity.fulfilled, (state, action) => {
        state.status = fetchSucceeded;
        state.listCity = action.payload;
      })
      .addCase(fetchCity.rejected, (state, action) => {
        state.status = fetchFailed;
        state.error = action.error.message;
      })

      .addCase(fetchDistrict.pending, (state) => {
        state.status = fetchLoading;
      })
      .addCase(fetchDistrict.fulfilled, (state, action) => {
        state.status = fetchSucceeded;
        state.listDistrict = action.payload;
      })
      .addCase(fetchDistrict.rejected, (state, action) => {
        state.status = fetchFailed;
        state.error = action.error.message;
      })

      .addCase(fetchWard.pending, (state) => {
        state.status = fetchLoading;
      })
      .addCase(fetchWard.fulfilled, (state, action) => {
        state.status = fetchSucceeded;
        state.listWard = action.payload;
      })
      .addCase(fetchWard.rejected, (state, action) => {
        state.status = fetchFailed;
        state.error = action.error.message;
      });
  },
});

export const {
  resetAddressList,
  resetAddressStatus,
  setSelectCity,
  setSelectDistrict,
  setSelectWard,
  resetListWard,
} = addressListSlice.actions;

export const selectAddressListCity = (state) => state.addressList.listCity;
export const selectAddressListDistrict = (state) =>
  state.addressList.listDistrict;
export const selectAddressListWard = (state) => state.addressList.listWard;

export const selectAddressCity = (state) => state.addressList.selectCity;
export const selectAddressDistrict = (state) =>
  state.addressList.selectDistrict;
export const selectAddressWard = (state) => state.addressList.selectWard;

export const selectAddressListStatus = (state) => state.addressList.status;
export const selectAddressListError = (state) => state.addressList.error;

export default addressListSlice.reducer;
