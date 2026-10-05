export interface Product {
  id: string;
  name: string;
  category: string; // e.g. 'Lipstick', 'Mascara', 'Dresses'
  type: 'makeup' | 'fashion';
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  rating: number;
  reviewsCount: number;
  inStock: boolean;
  options?: {
    name: string;
    values: string[];
  };
  features?: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedOption?: string;
}
