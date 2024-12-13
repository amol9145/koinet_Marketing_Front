// infographicsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseUrl } from '../../../src/Constant/ConstantFiles';


// Define the async thunk for making the API call
export const createInfographic = createAsyncThunk(
    'createinfographics/create',
    async(formData, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${baseUrl}/infographics`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Create slice
const createinfographicsSlice = createSlice({
    name: 'createinfographics',
    initialState: {
        loading: false,
        error: null,
        success: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createInfographic.pending, (state) => {
                state.loading = true;
            })
            .addCase(createInfographic.fulfilled, (state) => {
                state.loading = false;
                state.success = true;
            })
            .addCase(createInfographic.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default createinfographicsSlice.reducer;