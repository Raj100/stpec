import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllFaculty = createAsyncThunk(`admin/fetchAllFaculty`, async () => {
    const response = await axios.get('/api/admin/faculty');
    return response.data;
});

export const postAnnouncement = createAsyncThunk(`admin/postAnnouncement`, async (announcement) => {
    const response = await axios.post('/api/admin/announcements', announcement);
    return response.data;
});

const adminSlice = createSlice({
    name: 'admin',
    initialState: {
        facultyList: [],
        announcements: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllFaculty.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchAllFaculty.fulfilled, (state, action) => {
                state.loading = false;
                state.facultyList = action.payload;
            })
            .addCase(postAnnouncement.fulfilled, (state, action) => {
                state.announcements.push(action.payload);
            })
            .addCase(fetchAllFaculty.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default adminSlice.reducer;
