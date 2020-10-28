import React from 'react';
import { render } from '@testing-library/react'; 
import { BasketItem } from './../../components';
import { AggregatedProduct } from './../../types/product';

describe('Component: BasketItem', () => {

  let product: AggregatedProduct;

  beforeEach( () => {
    product = {
      id: 1,
      name: 'Face Masks',
      price: 2.5,
      unit: 1,
      discount: 1,
      aggregate: false,
      measurement: false,
      units: 3
    }
  });

  test('renders basket component', () => {
    render(<BasketItem product={product} />);
  });

  test('matches snapshot', () => {
    const { asFragment } = render(<BasketItem product={product} />);
    expect(asFragment()).toMatchSnapshot();
  });

  // test('toolbar contains view title', () => {
  //   const { getByText } = render(<BasketItem  product={product} />);
  //   expect(getByText(`${product.name} : ${product.price}`)).not.toBeNull();
  // });

});