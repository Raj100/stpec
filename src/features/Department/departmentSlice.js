import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../axiosInstance';

// Fetch faculty profile
export const fetchAllFacultyProfile = createAsyncThunk('faculty/fetchAllFacultyProfile', async () => {
    const response = await axiosInstance.post(`/public/departments/faculty`);
    return response.data;
});

export const deleteFacultyProfile = createAsyncThunk('admin/deleteFacultyProfile', async (id) => {
  console.log("id",id);
  const response = await axiosInstance.delete(`admin/faculty/${id}`, id);
  return response.data;
});

// // Update faculty profile
// export const updateFacultyProfile = createAsyncThunk('faculty/updateFacultyProfile', async (profileData) => {
//     const response = await axiosInstance.put('faculty/profile', profileData);
//     return response.data;
// });

export const fetchPublicFacultyProfile = createAsyncThunk(
    'faculty/fetchPublicFacultyProfile',
    async (username) => {
        console.log(username);
      const response = await axiosInstance.post('public/faculty', username);
      return response.data;
    }
  );
 
const departmentSlice = createSlice({
    name: 'department',
    initialState: {
        profile: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchPublicFacultyProfile.pending, (state) => {
            state.loading = true;
          })
          .addCase(fetchPublicFacultyProfile.fulfilled, (state, action) => {
            state.loading = false;
            state.profile = action.payload;
          })
          .addCase(fetchPublicFacultyProfile.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          })

                    .addCase(deleteFacultyProfile.pending, (state) => {
                      state.loading = true;
                    })
                    .addCase(deleteFacultyProfile.fulfilled, (state, action) => {
                      state.loading = false;
                      // state.profile = action.payload;
                      state.profile = state.profile.filter(profile => profile._id !== action.payload);
                    })
                    .addCase(deleteFacultyProfile.rejected, (state, action) => {
                      state.loading = false;
                      state.error = action.error.message;
                    })
    
    
            .addCase(fetchAllFacultyProfile.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchAllFacultyProfile.fulfilled, (state, action) => {
                state.loading = false;
                state.department = action.payload;
            })
            .addCase(fetchAllFacultyProfile.rejected, (state, action) => {
                state.loading = false;
                state.error = "Failed to fetch faculty profile";
            })
            // .addCase(updateFacultyProfile.fulfilled, (state, action) => {
            //     state.profile = action.payload;
            // });
    },
});

export default departmentSlice.reducer;
