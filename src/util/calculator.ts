import { Product } from './../types/product';
import { Saving } from './../types/basket';

export const basketCalulator = (list: Product[]): number => {

  if (!Array.isArray(list))
    throw new Error('Invalid product');

  return list.reduce( (acc, item) => acc + item.price, 0);
}

export const savingsCalculator = (list: Product[]): Saving[] => {
  return [];
}

export const aggregateSavings = (list: Product[]) => {

  const productMap: any = {};

  for (let product of list) {

    let discount = product.discount;

    if (!discount)
      continue;
    
    if (!productMap[discount]) {
      productMap[discount] = 1;
    } else {
      ++productMap[discount]
    }
  }

  return productMap;
}