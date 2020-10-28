import '@testing-library/react';
import { basketCalulator } from './../../util/calculator';
import { Product } from './../../types/product';

describe('Util: calculator', () => {

  let product: Product,
    newProduct: Product;

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

    newProduct = {
      id: 2,
      name: 'Test Product',
      price: 15,
      unit: 1,
      discount: 0,
      aggregate: false,
      measurement: false
    }
  });

  test('initial basket state, no products added', () => {
    expect(basketCalulator([])).toEqual(0);
  });

  test('adding invalid product to basket', () => {
    expect( () => basketCalulator(1)).toThrow('Invalid product');
  });

  test('adding single product to basket', () => {
    expect(basketCalulator([product])).toEqual(product.price);
  });

  test('adding multiple similar products to basket', () => {
    expect(basketCalulator([product, product])).toEqual(product.price*2);
  });

  test('adding multiple different products to basket', () => {
    expect(basketCalulator([product, newProduct])).toEqual(product.price + newProduct.price);
  });
});