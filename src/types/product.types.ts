export interface Specification {
  label: string;
  value: string;
}

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
  details: Specification[] | null;   // ← renommé specifications → details
  createdAt: string;
  updatedAt: string;
}