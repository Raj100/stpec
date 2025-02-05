import axios from 'axios';
import Cookies from 'js-cookie';
const Url = import.meta.env.VITE_API_URL;





// const Url = 'http://localhost:5001';

// Create axios instance
const axiosInstance = axios.create({
    baseURL: `${Url}/api`, 
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = Cookies.get('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default axiosInstance;
