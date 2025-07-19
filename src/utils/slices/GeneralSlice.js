import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCategories } from "../../service/GeneralService";

const initialState = {
  categories: [],
  loading: false,
  error: null,
};

export const getCategories = createAsyncThunk(
  "general/getCategories",
  async (_, thunkAPI) => {
    try {
      const data = await fetchCategories();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const GeneralSlice = createSlice({
  name: "general",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
        state.error = null;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch categories";
      });
  },
});

export default GeneralSlice.reducer; 