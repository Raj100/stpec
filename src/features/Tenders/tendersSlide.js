import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../axiosInstance';

export const postTender = createAsyncThunk(
  'tender/postTender',
  async (newTender, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append('type', newTender.type);
      formData.append('link', newTender.link);  
      formData.append('content', newTender.content);  
      formData.append('file', newTender.file); 
      
      const response = await axiosInstance.post('/admin/tender', formData, {
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

export const fetchTender = createAsyncThunk('tender/fetchTender', async () => {
  try {
    const response = await axiosInstance.get('/public/tender');
    return response.data; 
  } catch (error) {
    return Promise.reject(error.response.data); 
  }
});

export const editTender = createAsyncThunk('tender/editTender', async ({ id, updatedTender }) => {
  try {
    const response = await axiosInstance.put(`/admin/tender`, updatedTender);
    return response.data; 
  } catch (error) {
    return Promise.reject(error.response.data);
  }
});
export const deleteTender = createAsyncThunk('tender/deleteTender', async (id) => {
  try {
    // console.log('tirgger toh hua',id);
    const response = await axiosInstance.delete(`/admin/tender`, {
      data: { id }
    });
    console.log('response',response.data); 
    return response.data; 
  } catch (error) {
    return Promise.reject(error.response.data);
  }
});



const initialState = {
  tender: [],
  loading: false,
  error: null,
};

const tenderSlice = createSlice({
  name: 'tender',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchTender.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchTender.fulfilled, (state, action) => {
      state.loading = false;
      state.tender = action.payload; 
    })
    .addCase(fetchTender.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

    .addCase(postTender.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(postTender.fulfilled, (state, action) => {
      state.loading = false;
      state.tender = state.tender.concat(action.payload);
    })

    // done
    .addCase(editTender.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(editTender.fulfilled, (state, action) => {
      state.loading = false;
      const index = state.tender.findIndex(tender => tender._id === action.payload._id);
      if (index !== -1) {
        state.tender[index] = action.payload; 
      }
    })
    .addCase(editTender.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload; 
    })
    

    // done
    .addCase(deleteTender.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(deleteTender.fulfilled, (state, action) => {
      state.loading = false;
      state.tender = state.tender.filter(tender => tender._id !== action.payload);
    })
    .addCase(deleteTender.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default tenderSlice.reducer;
