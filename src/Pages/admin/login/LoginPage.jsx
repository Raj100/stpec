import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../../features/Login/LoginSlice';
import { Link, useNavigate } from 'react-router-dom'; 
import Cookies from 'js-cookie';
import { TextField, Button, Typography, CircularProgress } from '@mui/material';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate(); 
    const { loading, error, success } = useSelector((state) => state.login);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser({ username, password }));
    };

    useEffect(() => {
        Cookies.set('token', '');
        Cookies.get('token');
    },[]);

    useEffect(() => {
        if (success) {
            navigate('/admin/dashboard');
        }
    }, [success, navigate]);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                    Login
                </Typography>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <TextField
                            label="Username"
                            variant="outlined"
                            fullWidth
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <TextField
                            label="Password"
                            variant="outlined"
                            type="password"
                            fullWidth
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        disabled={loading}
                    >
                        {loading ? <CircularProgress size={24} /> : 'Login'}
                    </Button>
                    {error && <p className="text-red-500 text-sm">{error.message || 'Login failed'}</p>}
                    {success && <p className="text-green-500 text-sm">Login successful! Redirecting...</p>}
                </form>
                {/* <div className="mt-6">
                    <p className="text-sm text-gray-600">Don't have an account?</p>
                    <Link
                        to="/signup"
                        className="text-indigo-600 hover:text-indigo-800"
                    >
                        Sign Up
                    </Link>
                </div> */}
            </div>
        </div>
    );
};

export default LoginPage;
