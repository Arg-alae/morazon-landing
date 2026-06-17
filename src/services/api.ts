import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

const api = axios.create({
  baseURL: BASE_URL,
});

export const getActiveProducts = async () => {
  const response = await api.get('/products/active');
  return response.data;
};

export default api;