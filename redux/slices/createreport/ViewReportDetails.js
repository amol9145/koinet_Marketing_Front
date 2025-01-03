import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import { baseUrl } from '../../../src/Constant/ConstantFiles';

// Thunk for fetching report details
export const fetchReportDetails = createAsyncThunk(
    'reportDetails/fetchReportDetails',
    async(id, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${baseUrl}/get_report/${id}`);
            return response.data.data;
        } catch (error) {
            console.error('Error fetching report:', error);
            return rejectWithValue(error.response.data.message || 'Failed to fetch report details');
        }
    }
);

// Thunk for sending email
export const sendEmail = createAsyncThunk(
    'reportDetails/sendEmail',
    async(formData, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${baseUrl}/send-email`, formData);
            toast.success(response.data.message);
            return response.data.message;
        } catch (error) {
            toast.error('Failed to send email');
            return rejectWithValue(error.response.data.message || 'Failed to send email');
        }
    }
);

// Thunk for handling payment
export const handlePayment = createAsyncThunk(
    'reportDetails/handlePayment',
    async({ reportDetails, selectedLicense, token }, { rejectWithValue }) => {
        try {
            let amount, currency;
            if (selectedLicense === "single-user") {
                amount = reportDetails.singleUserPrice * 100;
                currency = reportDetails.singleUserCurrency || "INR";
            } else if (selectedLicense === "multi-user") {
                amount = reportDetails.multiUserPrice * 100;
                currency = reportDetails.multiUserCurrency || "INR";
            } else if (selectedLicense === "enterprise") {
                amount = reportDetails.enterprisePrice * 100;
                currency = reportDetails.enterpriseCurrency || "INR";
            }

            const response = await axios.post(`${baseUrl}/create-order`, {
                amount,
                currency,
                licenseType: selectedLicense,
                token,
            });

            return response.data.data;
        } catch (error) {
            console.error('Error creating order:', error);
            return rejectWithValue(error.response.data.message || 'Failed to create payment order');
        }
    }
);

const reportDetailsSlice = createSlice({
    name: 'reportDetails',
    initialState: {
        reportDetails: null,
        emailStatus: null,
        paymentDetails: null,
        loading: false,
        error: null,
    },
    reducers: {
        resetEmailStatus: (state) => {
            state.emailStatus = null;
        },
    },
    extraReducers: (builder) => {
        builder
        // Fetch Report Details
            .addCase(fetchReportDetails.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchReportDetails.fulfilled, (state, action) => {
                state.loading = false;
                state.reportDetails = action.payload;
            })
            .addCase(fetchReportDetails.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

        // Send Email
        .addCase(sendEmail.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(sendEmail.fulfilled, (state, action) => {
                state.loading = false;
                state.emailStatus = action.payload;
            })
            .addCase(sendEmail.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // Handle Payment
            .addCase(handlePayment.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(handlePayment.fulfilled, (state, action) => {
                state.loading = false;
                state.paymentDetails = action.payload;
            })
            .addCase(handlePayment.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { resetEmailStatus } = reportDetailsSlice.actions;
export default reportDetailsSlice.reducer;