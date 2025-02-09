// src/redux/slices/reportsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseUrl } from '../../src/Constant/ConstantFiles';


// Async thunk for fetching reports
export const fetchReports = createAsyncThunk('reports/fetchReports', async(_, thunkAPI) => {
    try {
        const response = await axios.get(`${baseUrl}/get_reports`);
        return response.data.data; // Assuming the API returns the reports in data.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data || error.message);
    }
});

const reportsSlice = createSlice({
    name: 'reports',
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchReports.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchReports.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchReports.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const reportsReducer = reportsSlice.reducer;