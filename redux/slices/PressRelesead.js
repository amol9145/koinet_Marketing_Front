// src/redux/slices/pressReleasesSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseUrl } from '../../src/Constant/ConstantFiles';


// Async thunk for fetching press releases
export const fetchPressReleases = createAsyncThunk('pressReleases/fetchPressReleases', async(_, thunkAPI) => {
    try {
        const response = await axios.get(`${baseUrl}/get_data_press_releases`);
        return response.data.data; // Assuming API returns an array in data.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data || error.message);
    }
});

const pressReleasesSlice = createSlice({
    name: 'pressReleases',
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPressReleases.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPressReleases.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchPressReleases.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const pressReleasesReducer = pressReleasesSlice.reducer;