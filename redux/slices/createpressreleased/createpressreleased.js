// redux/slices/pressReleaseSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseUrl } from '../../../src/Constant/ConstantFiles';


// Async thunk for the API call
export const createPressRelease = createAsyncThunk(
    'createpressRelease/create',
    async(formData, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${baseUrl}/upload_press_release`, formData, {
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

const createpressReleaseSlice = createSlice({
    name: 'createpressRelease',
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
            .addCase(createPressRelease.pending, (state) => {
                state.loading = true;
            })
            .addCase(createPressRelease.fulfilled, (state, action) => {
                state.loading = false;
                state.message = action.payload.message;
                state.error = '';
            })
            .addCase(createPressRelease.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { resetState } = createpressReleaseSlice.actions;

export default createpressReleaseSlice.reducer;