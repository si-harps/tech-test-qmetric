import '@testing-library/react';
import { basketCalulator, aggregateSavings, savingsCalculator } from './../../util/calculator';
import { Product } from './../../types/product';

describe('Util: calculator', () => {

  let product: Product,
    newProduct: Product,
    discountedProduct: Product;

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

    discountedProduct = {
      id: 3,
      name: 'Test Product',
      price: 2.5,
      unit: 1,
      discount: 1,
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

  test('aggregation of non discounted products prior to applying savings', () => {
    expect(aggregateSavings([product, product])).toMatchObject({});
  });

  test('aggregation of discounted products prior to applying savings', () => {
    const expectedAggregation = { 1: 2 };
    expect(aggregateSavings([discountedProduct, discountedProduct])).toMatchObject(expectedAggregation);
  });

  test('discounted product value prior to threshold', () => {
    expect(savingsCalculator([discountedProduct])).toEqual([]);
  });
});