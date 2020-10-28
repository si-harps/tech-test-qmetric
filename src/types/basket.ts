import { Product } from './product';

export interface BasketState {
  list: Product[];
  subtotal: number;
  totalSavings: number;
  total: number;
}