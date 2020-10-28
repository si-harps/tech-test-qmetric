import { Product } from '../types/product';

export const basketCalulator = (list: Product[]): number => {
  return list.reduce( (acc, item) => acc + item.price, 0);
}