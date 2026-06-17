export interface Product {
  id: number;
  title: string;
  description: string;
  price: number | null;
  imageUrl: string | null;
  images: string[];
  sku: string | null;
  stock: number;
  status: string;
  isActive: boolean;
  category: string | null;
  tags: string[];
  weight: number | null;
  createdAt: string;
  updatedAt: string;
}