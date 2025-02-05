import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../axiosInstance';

export const postAnnouncement = createAsyncThunk(
  'announcements/postAnnouncement',
  async (newAnnouncement, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/public/announcements', newAnnouncement);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchAnnouncements = createAsyncThunk(
  'announcements/fetchAnnouncements',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('/public/announcements');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk to edit an announcement
export const editAnnouncement = createAsyncThunk(
  'announcements/editAnnouncement',
  async ({ id, updatedAnnouncement }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(`/admin/announcements`, updatedAnnouncement);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const deleteAnnouncement = createAsyncThunk(
  'announcements/editAnnouncement',
  async ({ id }) => {
    try {
      console.log('id', id);
      const response = await axiosInstance.put(`/admin/announcements`, id);
      return response.data;
    } catch (error) {
      return (error.response.data);
    }
  }
);

const initialState = {
  announcements: [],
  loading: false,
  error: null,
};

// Create the slice
const announcementSlice = createSlice({
  name: 'announcements',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle fetchAnnouncements lifecycle
      .addCase(fetchAnnouncements.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAnnouncements.fulfilled, (state, action) => {
        state.loading = false;
        state.announcements = action.payload;
      })
      .addCase(fetchAnnouncements.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Handle postAnnouncement lifecycle
      .addCase(postAnnouncement.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postAnnouncement.fulfilled, (state, action) => {
        state.loading = false;
        state.announcements.push(action.payload); // Add new announcement to the list
      })
      .addCase(postAnnouncement.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Handle editAnnouncement lifecycle
      .addCase(editAnnouncement.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editAnnouncement.fulfilled, (state, action) => {
        state.loading = false;
        let index = state.announcements.findIndex(announcement => announcement.id === action.payload.id);
        if (index !== -1) {
          state.announcements[index] = action.payload;
          index = index - 1; // Update the edited announcement
        }
      })
      .addCase(editAnnouncement.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default announcementSlice.reducer;
