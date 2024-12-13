import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseUrl } from '../../src/Constant/ConstantFiles';


export const fetchInfographicById = createAsyncThunk(
    'viewinfographic/fetchInfographicById',
    async(id, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${baseUrl}/get_infographic/${id}`);
            return response.data.data; // Assuming `data` contains the infographic
        } catch (error) {
            return rejectWithValue('Error fetching infographic data.', error);
        }
    }
);

const viewinfographicSlice = createSlice({
    name: 'viewinfographic',
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchInfographicById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchInfographicById.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchInfographicById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default viewinfographicSlice.reducer;