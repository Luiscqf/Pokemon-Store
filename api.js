import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.reinaldowft.com/pokestore?page=1&limit=150'
});

export default api;