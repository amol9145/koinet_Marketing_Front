// src/redux/slices/Infographicsslice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../src/Constant/ConstantFiles";

// Thunk to fetch infographics data
export const fetchInfographics = createAsyncThunk(
    "infographics/fetchInfographics",
    async(_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${baseUrl}/get_infographics`);
            if (Array.isArray(response.data.data)) {
                return response.data.data;
            } else {
                throw new Error("Data is not an array");
            }
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const infographicsSlice = createSlice({
    name: "infographics",
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchInfographics.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchInfographics.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchInfographics.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

// Correctly export the reducer
export default infographicsSlice.reducer;