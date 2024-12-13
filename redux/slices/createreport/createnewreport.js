// redux/slices/reportSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseUrl } from '../../../src/Constant/ConstantFiles';


// Async thunk for the API call
export const createReport = createAsyncThunk(
    'createnewreport/create',
    async(formData, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${baseUrl}/reports`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            return response.data; // Success response data
        } catch (error) {
            return rejectWithValue(error.response.data.error || 'An error occurred');
        }
    }
);

const createreportSlice = createSlice({
    name: 'createnewreport',
    initialState: {
        loading: false,
        message: '',
        error: '',
    },
    reducers: {
        resetState: (state) => {
            state.message = '';
            state.error = '';
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(createReport.pending, (state) => {
                state.loading = true;
            })
            .addCase(createReport.fulfilled, (state, action) => {
                state.loading = false;
                state.message = action.payload.message;
                state.error = '';
            })
            .addCase(createReport.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { resetState } = createreportSlice.actions;

export default createreportSlice.reducer;