import axios from 'axios';
import env from '../Env/index.jsx';

const api = axios.create({
    baseURL: env.url.API_URL,
    // timeout: 5000,
});

// api.defaults.timeout = 10 * 60 * 1000;

// axios.interceptors.request.use(config => {
//     config.timeout = 5000; // Wait for 5 seconds before timing out
//     return config;
// });

// axios.interceptors.response.use(
//     response => response,
//     error => {
//         if (error.code === 'ECONNABORTED' && error.message.includes('timeout')) {
//             console.log('Request timed out');
//         }
//         return Promise.reject(error);
//     }
// );

export default api;
