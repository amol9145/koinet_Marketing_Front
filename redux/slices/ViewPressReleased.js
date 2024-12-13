import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../src/Constant/ConstantFiles";

// Async Thunks
export const fetchPressReleaseById = createAsyncThunk(
    "viewpressRelease/fetchById",
    async(id, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `${baseUrl}/get_data_press_releases/${id}`
            );
            return response.data.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const fetchAllPressReleases = createAsyncThunk(
    "viewpressRelease/fetchAll",
    async(_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${baseUrl}/get_data_press_releases`);
            return response.data.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const sendEmail = createAsyncThunk(
    "viewpressRelease/sendEmail",
    async(formData, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${baseUrl}/send-email`, formData);
            return response.data.message;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

// Slice
const viewpressReleaseSlice = createSlice({
    name: "viewpressRelease",
    initialState: {
        pressRelease: null,
        pressReleases: [],
        loading: false,
        error: null,
    },
    reducers: {
        clearError: (state) => {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPressReleaseById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPressReleaseById.fulfilled, (state, action) => {
                state.loading = false;
                state.pressRelease = action.payload;
            })
            .addCase(fetchPressReleaseById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(fetchAllPressReleases.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAllPressReleases.fulfilled, (state, action) => {
                state.loading = false;
                state.pressReleases = action.payload;
            })
            .addCase(fetchAllPressReleases.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(sendEmail.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(sendEmail.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(sendEmail.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { clearError } = viewpressReleaseSlice.actions;
export default viewpressReleaseSlice.reducer;