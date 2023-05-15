import axios from 'axios';
import env from '../Env/index.jsx';

const api = axios.create({
    baseURL: env.url.API_URL
});

api.defaults.timeout = 10 * 60 * 1000;

export default api;
