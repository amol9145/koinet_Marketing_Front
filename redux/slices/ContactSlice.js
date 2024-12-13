// src/redux/slices/contactSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../src/Constant/ConstantFiles";

export const submitContactForm = createAsyncThunk(
    "contact/submitContactForm",
    async(formData, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                `${baseUrl}/marketing/contact_page_data`,
                formData
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data || "An error occurred");
        }
    }
);

const contactSlice = createSlice({
    name: "contact",
    initialState: {
        loading: false,
        success: false,
        error: null,
    },
    reducers: {
        resetContactState: (state) => {
            state.loading = false;
            state.success = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(submitContactForm.pending, (state) => {
                state.loading = true;
                state.success = false;
                state.error = null;
            })
            .addCase(submitContactForm.fulfilled, (state) => {
                state.loading = false;
                state.success = true;
            })
            .addCase(submitContactForm.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
                state.error = action.payload;
            });
    },
});

export const { resetContactState } = contactSlice.actions;
export default contactSlice.reducer;