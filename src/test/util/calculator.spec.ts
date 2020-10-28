import '@testing-library/react';
import { basketCalulator } from './../../util/calculator';
import { Product } from './../../types/product';

describe('Util: calculator', () => {

  let product: Product;

  beforeEach( () => {

    product = {
      id: 1,
      name: 'Test Product 1',
      price: 10,
      unit: 1,
      discount: 0,
      aggregate: false,
      measurement: false
    }
  });

  test('initial basket state, no products added', () => {
    expect(basketCalulator([])).toEqual(0);
  });

  test('adding single product to basket', () => {
    expect(basketCalulator([product])).toEqual(product.price);
  });

  test('adding invalid product to basket', () => {
    expect( () => basketCalulator(1)).toThrow('Invalid product');
  });
});