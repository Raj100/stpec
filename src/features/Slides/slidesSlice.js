import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../axiosInstance';

export const postSlide = createAsyncThunk(
  'slides/postSlide',
  async (newSlide, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append('type', newSlide.type);
      formData.append('image', newSlide.image);  
      formData.append('description', newSlide.description);  
      formData.append('accentColorLink', "color");
      formData.append('file', newSlide.file); 
      
      const response = await axiosInstance.post('/admin/slides', formData, {
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
export const fetchSlides = createAsyncThunk('slides/fetchSlides', async () => {
  try {
    const response = await axiosInstance.get('/public/slides');
    return response.data; 
  } catch (error) {
    return Promise.reject(error.response.data); 
  }
});

export const editSlide = createAsyncThunk('slides/editSlide', async ({ id, updatedSlide }) => {
  try {
    const response = await axiosInstance.put(`/admin/slides`, updatedSlide);
    return response.data; 
  } catch (error) {
    return Promise.reject(error.response.data);
  }
});
export const deleteSlide = createAsyncThunk('slides/deleteSlide', async (id) => {
  try {
    console.log('tirgger toh hua',id);
    const response = await axiosInstance.delete(`/admin/slides`, {
      data: { id }
    });
    console.log('response',response.data); 
    return response.data; 
  } catch (error) {
    return Promise.reject(error.response.data);
  }
});



const initialState = {
  slides: [],
  loading: false,
  error: null,
};

const slidesSlice = createSlice({
  name: 'slides',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchSlides.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchSlides.fulfilled, (state, action) => {
      state.loading = false;
      state.slides = action.payload; 
    })
    .addCase(fetchSlides.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

    .addCase(postSlide.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(postSlide.fulfilled, (state, action) => {
      state.loading = false;
      state.slides = state.slides.concat(action.payload);
    })

    // done
    .addCase(editSlide.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(editSlide.fulfilled, (state, action) => {
      state.loading = false;
      const index = state.slides.findIndex(slide => slide._id === action.payload._id);
      if (index !== -1) {
        state.slides[index] = action.payload; 
      }
    })
    .addCase(editSlide.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload; 
    })
    

    // done
    .addCase(deleteSlide.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(deleteSlide.fulfilled, (state, action) => {
      state.loading = false;
      // Filter out the deleted slide
      state.slides = state.slides.filter(slide => slide._id !== action.payload);
    })
    .addCase(deleteSlide.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default slidesSlice.reducer;
