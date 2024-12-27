import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseUrl } from '../../src/Constant/ConstantFiles';

// Async thunk to fetch contact form data
export const fetchContactData = createAsyncThunk(
    'contactForm/fetchContactData',
    async() => {
        const response = await axios.get(`${baseUrl}/marketing/contact_page_data`);
        return response.data;
    }
);

const contactFormSlice = createSlice({
    name: 'contactForm', // Updated the name here
    initialState: {
        data: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchContactData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchContactData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchContactData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default contactFormSlice.reducer;