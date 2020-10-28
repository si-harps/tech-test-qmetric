import { Product } from './product';

export interface Saving {
  name: string;
  value: number;
}

export interface BasketState {
  list: Product[];
  subtotal: number;
  totalSavings: number;
  total: number;
}