import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../axiosInstance';

export const fetchFacultyProfile = createAsyncThunk('faculty/fetchFacultyProfile', async () => {
    const response = await axiosInstance.get(`/faculty/profile`);
    return response.data;
});

export const updateFacultyProfile = createAsyncThunk(
  'faculty/updateFacultyProfile',
  async (profileData, { rejectWithValue }) => {
      try {
        const formData = new FormData();
        formData.append('name', profileData?.name);
        formData.append('bio', JSON.stringify(profileData?.bio));  
        formData.append('phone', profileData?.phone); 
        formData.append('email', profileData?.email); 
        formData.append('researcharea', profileData?.researcharea);
        formData.append('courses', profileData?.courses);
        formData.append('password', profileData?.password);
        formData.append('username', profileData?.username);
        // formData.append('imageLink', profileData.bio); 
        formData.append('file', profileData?.file); 
        formData.append('customSections', JSON.stringify(profileData?.customSections));
        
          const response = await axiosInstance.put('faculty/profile', formData , {
              headers: {
                  'Content-Type': 'multipart/form-data',
              },
          });
          return response.data;
      } catch (error) {
          return rejectWithValue(error.response?.data || 'An error occurred while updating the profile.');
      }
  }
);


// export const fetchFacultyProfileByAdmin = createAsyncThunk('admin/fetchFacultyProfileByAdmin', async (id) => {
//   console.log("id",id);
//   const response = await axiosInstance.get(`/admin/getfacultyprofile/${id}`,);
//   return response.data;
// });

// export const updateFacultyProfileByAdmin = createAsyncThunk(
//   'admin/updateFacultyProfileByAdmin',
//   async (profileData, { rejectWithValue }) => {
//       try {
//         const formData = new FormData();
//         formData.append('id', profileData?.id);
//         formData.append('name', profileData?.name);
//         formData.append('bio', JSON.stringify(profileData?.bio));  
//         formData.append('phone', profileData?.phone); 
//         formData.append('email', profileData?.email); 
//         formData.append('designation', profileData?.designation); 
//         formData.append('department', profileData?.department);
//         formData.append('username', profileData?.username);
//         formData.append('password', profileData?.password);
//         formData.append('staff', profileData?.staff); 
//         formData.append('researcharea', profileData?.researcharea);
//         formData.append('courses', profileData?.courses);
//         // formData.append('imageLink', profileData.bio); 
//         formData.append('file', profileData?.file); 
//         formData.append('customSections', JSON.stringify(profileData?.customSections));
        
//           const response = await axiosInstance.put('admin/editfacultyprofile', formData , {
//               headers: {
//                   'Content-Type': 'multipart/form-data',
//               },
//           });
//           return response.data;
//       } catch (error) {
//           return rejectWithValue(error.response?.data || 'An error occurred while updating the profile.');
//       }
//   }
// );


export const fetchPublicFacultyProfile = createAsyncThunk(
    'faculty/fetchPublicFacultyProfile',
    async (username) => {
        console.log(username);
      const response = await axiosInstance.post('public/faculty', username);
      return response.data;
    }
  );
 
const facultySlice = createSlice({
    name: 'faculty',
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
    
    
            .addCase(fetchFacultyProfile.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchFacultyProfile.fulfilled, (state, action) => {
                state.loading = false;
                state.profile = action.payload;
            })
            .addCase(fetchFacultyProfile.rejected, (state, action) => {
                state.loading = false;
                state.error = "Failed to fetch faculty profile";
            })
            .addCase(updateFacultyProfile.fulfilled, (state, action) => {
                state.profile = action.payload;
            })





        //   .addCase(fetchFacultyProfileByAdmin.pending, (state) => {
        //       state.loading = true;
        //   })
        //   .addCase(fetchFacultyProfileByAdmin.fulfilled, (state, action) => {
        //       state.loading = false;
        //       state.profile = action.payload;
        //   })
        //   .addCase(fetchFacultyProfileByAdmin.rejected, (state, action) => {
        //       state.loading = false;
        //       state.error = "Failed to fetch faculty profile";
        //   })
        //   .addCase(updateFacultyProfileByAdmin.fulfilled, (state, action) => {
        //     state.profile = action.payload;
        // });
    },
});

export default facultySlice.reducer;
