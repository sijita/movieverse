import { baseURL } from '@/utils/constants';
import axios from 'axios';

const instance = axios.create({
  baseURL: baseURL,
});

export default instance;

instance.interceptors.request.use(
  async (config) => {
    config.headers.Authorization = `Bearer ${process.env.TMDB_API_KEY}`;

    return config;
  },

  (error) => Promise.reject(error)
);
