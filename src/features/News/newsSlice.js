import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../axiosInstance';

export const postNews = createAsyncThunk(
  'news/postNews',
  async (newNews, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append('type', newNews.type);
      formData.append('link', newNews.link);  
      formData.append('content', newNews.content);  
      formData.append('file', newNews.file); 
      
      const response = await axiosInstance.post('/admin/news', formData, {
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

export const fetchNews = createAsyncThunk('news/fetchNews', async () => {
  try {
    const response = await axiosInstance.get('/public/news');
    return response.data; 
  } catch (error) {
    return Promise.reject(error.response.data); 
  }
});

export const editNews = createAsyncThunk('news/editNews', async ({ id, updatedNews }) => {
  try {
    const response = await axiosInstance.put(`/admin/news`, updatedNews);
    return response.data; 
  } catch (error) {
    return Promise.reject(error.response.data);
  }
});
export const deleteNews = createAsyncThunk('news/deleteNews', async (id) => {
  try {
    // console.log('tirgger toh hua',id);
    const response = await axiosInstance.delete(`/admin/news`, {
      data: { id }
    });
    console.log('response',response.data); 
    return response.data; 
  } catch (error) {
    return Promise.reject(error.response.data);
  }
});



const initialState = {
  news: [],
  loading: false,
  error: null,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchNews.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchNews.fulfilled, (state, action) => {
      state.loading = false;
      state.news = action.payload; 
    })
    .addCase(fetchNews.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

    .addCase(postNews.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(postNews.fulfilled, (state, action) => {
      state.loading = false;
      state.news = state.news.concat(action.payload);
    })

    // done
    .addCase(editNews.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(editNews.fulfilled, (state, action) => {
      state.loading = false;
      const index = state.news.findIndex(news => news._id === action.payload._id);
      if (index !== -1) {
        state.news[index] = action.payload; 
      }
    })
    .addCase(editNews.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload; 
    })
    

    // done
    .addCase(deleteNews.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(deleteNews.fulfilled, (state, action) => {
      state.loading = false;
      // Filter out the deleted news
      state.news = state.news.filter(news => news._id !== action.payload);
    })
    .addCase(deleteNews.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default newsSlice.reducer;
