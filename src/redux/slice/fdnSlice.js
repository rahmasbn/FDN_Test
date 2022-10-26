import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { HYDRATE } from "next-redux-wrapper";

export const getAllData = createAsyncThunk(
  "data/getAll",
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp"
      );
      return fulfillWithValue(response.data);
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

const FdnSlice = createSlice({
  name: "FDN",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.data,
      };
    },
    [getAllData.pending]: (state) => {
      state.isLoading = true;
      state.data = [];
      state.error = null;
    },
    [getAllData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = null;
    },
    [getAllData.rejected]: (state, action) => {
      state.isLoading = false;
      state.data = [];
      state.error = action.payload;
    },
  },
});

export default FdnSlice;
