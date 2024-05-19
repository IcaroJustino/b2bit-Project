import axios from 'axios';

export const api = axios.create({
    //configuração da api
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Accept': 'application/json;version=v1_web',
        'Content-Type': 'application/json'
    },
});



api.interceptors.request.use(
    (config) => {
        const token = sessionStorage.getItem('acess_token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

