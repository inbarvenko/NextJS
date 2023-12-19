import axios from 'axios';
const URL_LOCAL = `http://localhost:1337/api`

export const axiosInstance = axios.create({
    baseURL: URL_LOCAL,
});