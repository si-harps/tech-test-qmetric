import { Product } from './../types/product';
import { Saving } from './../types/basket';
import discounts from './../data/discounts.json';

export const basketCalulator = (list: Product[]): number => {

  if (!Array.isArray(list))
    throw new Error('Invalid product');

  return list.reduce( (acc, item) => acc + item.price, 0);
}

export const savingsCalculator = (list: Product[]): Saving[] => {
  
  const productMap = aggregateSavings(list);
  const savings = [];

  for (let discount of discounts) {

    let products = productMap[discount.id];
    let threshold = discount.threshold;

    if (products && products >= threshold) {

      savings.push({
        name: discount.name,
        value: Math.floor(products / threshold) * discount.apply
      });
    }
  }

  return savings;
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