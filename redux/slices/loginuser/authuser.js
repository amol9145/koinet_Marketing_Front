// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../../src/Constant/ConstantFiles";


// Async thunk for login
export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async({ email, password }, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${baseUrl}/login`, { email, password });
            localStorage.setItem("token", response.data.token); // Store token in localStorage

            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data.message || "Login failed. Try again.");
        }
    }
);

// Initial state
const initialState = {
    user: null,
    token: localStorage.getItem("token") || null,
    loading: false,
    error: null,
};

// Auth slice
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;
            localStorage.removeItem("token");
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;