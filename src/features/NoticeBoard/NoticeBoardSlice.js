import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../axiosInstance'; // Replace with the path to your axios instance

export const fetchNotices = createAsyncThunk(
  'noticeboard/fetchNotices',
  async () => {
    try {
      const response = await axiosInstance.get('/public/noticeboard'); 
      console.log('response',response.data);
      return response.data;
    } catch (error) {
      return Promise.reject(error.response.data);
    }
  }
);

// export const postNotice = createAsyncThunk(
//   'noticeboard/postNotice',
//   async (newNotice, { rejectWithValue }) => {
//     try {
//       const response = await axiosInstance.post('/admin/noticeboard', newNotice); 
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response ? error.response.data : error.message);
//     }
//   }
// );
export const postNotice = createAsyncThunk(
  'noticeboard/postNotice',
  async (newNews, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append('type', newNews.type);
      formData.append('link', newNews.link);  
      formData.append('content', newNews.content);  
      formData.append('file', newNews.file); 
      
      const response = await axiosInstance.post('/admin/noticeboard', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      });

      return response.data;
    } catch (error) {
      // Handling the error, if any
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

export const editNotice = createAsyncThunk(
  'noticeboard/editNotice',
  async ({ id, updatedNotice }) => {
    try {
      const response = await axiosInstance.put(`/admin/noticeboard/${id}`, updatedNotice);
      return response.data;
    } catch (error) {
      return Promise.reject(error.response.data);
    }
  }
);

export const deleteNotice = createAsyncThunk(
  'noticeboard/deleteNotice',
  async (id) => {
    try {
      const response = await axiosInstance.delete(`/admin/noticeboard/${id}`);
      return response.data;
    } catch (error) {
      return Promise.reject(error.response.data);
    }
  }
);

const initialState = {
  notices: [],
  loading: false,
  error: null,
};

const noticeboardSlice = createSlice({
  name: 'notices',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotices.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNotices.fulfilled, (state, action) => {
        state.loading = false;
        state.notices = action.payload;
      })
      .addCase(fetchNotices.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(postNotice.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postNotice.fulfilled, (state, action) => {
        state.loading = false;
        state.notices.push(action.payload); 
      })
      .addCase(postNotice.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(editNotice.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editNotice.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.notices.findIndex((notice) => notice._id === action.payload._id);
        if (index !== -1) {
          state.notices[index] = action.payload; 
        }
      })
      .addCase(editNotice.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(deleteNotice.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteNotice.fulfilled, (state, action) => {
        state.loading = false;
        state.notices = state.notices.filter((notice) => notice._id !== action.payload._id);
      })
      .addCase(deleteNotice.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default noticeboardSlice.reducer;