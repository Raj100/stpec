import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'; // Fix the import path
import axiosInstance from '../axiosInstance'; // Import axiosInstance
import Cookies from 'js-cookie'; // Import js-cookie

export const loginUser = createAsyncThunk(`login/loginUser`, async (credentials) => {
    const response = await axiosInstance.post('/auth/login', credentials);
    return response.data; // Returns { accessToken, ...otherData }
});

export const signupUser = createAsyncThunk(`login/signupUser`, async (credentials) => {
    const response = await axiosInstance.post('/auth/signup', credentials);
    return response.data;
});

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        loading: false,
        error: null,
        success: false,
        accessToken: null,
    },
    reducers: {
        resetSuccess: (state) => {
            state.success = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.accessToken = action.payload.accessToken;
                state.success = true;
                // Save token to cookies
                Cookies.set('token', action.payload.accessToken, { expires: 7 }); // Expires in 7 days
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
                state.success = false;
            });


        builder
            .addCase(signupUser.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
            })
            .addCase(signupUser.fulfilled, (state, action) => {
                state.loading = false;
                state.accessToken = action.payload.accessToken;
                state.success = true;
                Cookies.set('token', action.payload.accessToken, { expires: 7 });
            })
            .addCase(signupUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
                state.success = false;
            });
    },
});

export const { resetSuccess } = loginSlice.actions;

export default loginSlice.reducer;
