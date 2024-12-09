import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../services/api';

// Async thunk for submitting a report
export const submitReport = createAsyncThunk(
    'reports/submitReport',
    async(formData, { rejectWithValue }) => {
        try {
            const response = await api.post(`http://localhost:3000/reports`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data || 'Error submitting report');
        }
    }
);

const reportSlice = createSlice({
    name: 'reports',
    initialState: {
        reportDetails: {
            title: "",
            category: "",
            singleUserPrice: "",
            multiUserPrice: "",
            enterprisePrice: "",
            summary: "",
            tableOfContents: "",
            methodology: "",
            downloadSampleReport: "",
            reportId: "",
            file: null,
        },
        isSubmitting: false,
        error: null,
    },
    reducers: {
        updateField: (state, action) => {
            const { name, value } = action.payload;
            state.reportDetails[name] = value;
        },
        updateFile: (state, action) => {
            state.reportDetails.file = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(submitReport.pending, (state) => {
                state.isSubmitting = true;
                state.error = null;
            })
            .addCase(submitReport.fulfilled, (state) => {
                state.isSubmitting = false;
                state.reportDetails = {
                    title: "",
                    category: "",
                    singleUserPrice: "",
                    multiUserPrice: "",
                    enterprisePrice: "",
                    summary: "",
                    tableOfContents: "",
                    methodology: "",
                    downloadSampleReport: "",
                    reportId: "",
                    file: null,
                };
            })
            .addCase(submitReport.rejected, (state, action) => {
                state.isSubmitting = false;
                state.error = action.payload;
            });
    },
});

export const { updateField, updateFile } = reportSlice.actions;
export default reportSlice.reducer;