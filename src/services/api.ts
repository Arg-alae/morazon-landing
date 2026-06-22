import axios from 'axios';
import type { Product } from '../types/product.types';

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

const api = axios.create({
  baseURL: BASE_URL,
});

export const getActiveProducts = async (): Promise<Product[]> => {
  const response = await api.get('/products/active');
  return response.data;
};

export interface CreateOrderData {
  productId: number;
  name: string;
  email: string;
  phone: string;
  quantity?: number;
  message?: string;
}

export const createOrder = async (data: CreateOrderData) => {
  const response = await api.post('/orders', data);
  return response.data;
};

export default api;