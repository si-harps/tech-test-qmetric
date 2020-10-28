import { Product } from '../types/product';

export const basketCalulator = (list: Product[]): number => {

  if (!Array.isArray(list))
    throw new Error('Invalid product');
    
  return list.reduce( (acc, item) => acc + item.price, 0);
}