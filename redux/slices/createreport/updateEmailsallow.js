// redux/slices/updateReportSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseUrl } from '../../../src/Constant/ConstantFiles';


// Async thunk for updating the report
export const updateReport = createAsyncThunk(
    'updateReportDetails/update',
    async({ id, formData }, { rejectWithValue }) => {
        try {
            const response = await axios.put(`${baseUrl}/reports_update/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            return response.data.data; // Updated report data
        } catch (error) {
            return rejectWithValue(error.response.data.message || 'An error occurred');
        }
    }
);

const updateReportSlice = createSlice({
    name: 'updateReportDetails', // Updated slice name here
    initialState: {
        reportDetails: null,
        updatedReport: null, // Store the updated report
        loading: false,
        error: '',
    },
    reducers: {
        resetUpdatedReport: (state) => {
            state.updatedReport = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(updateReport.pending, (state) => {
                state.loading = true;
                state.error = '';
            })
            .addCase(updateReport.fulfilled, (state, action) => {
                state.loading = false;
                state.updatedReport = action.payload; // Store the updated report
                state.error = '';
            })
            .addCase(updateReport.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { resetUpdatedReport } = updateReportSlice.actions;

export default updateReportSlice.reducer;