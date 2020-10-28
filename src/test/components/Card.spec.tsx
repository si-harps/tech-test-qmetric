import React from 'react';
import { render } from '@testing-library/react'; 
import { Card } from './../../components';
import { Product } from './../../types/product';
import { addToBasket, removeFromBasket, removeItemFromBasket } from './../../actions/basket';
 
describe('Components: Card', () => {

  let product: Product,
    basket: Product[],
    props: any;

  beforeEach( () => {

    product = {
      id: 1,
      name: 'Face Masks',
      price: 2.5,
      unit: 1,
      discount: 1,
      aggregate: false,
      measurement: false
    };

    basket = [
      product, 
      product
    ];

    props = {
      product,
      basket,
      addToBasket
    };
  });

  test('renders basket component', () => {
    render(<Card { ...props} />);
  });

  test('matches snapshot', () => {
    const { asFragment } = render(<Card { ...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('product name visibility', () => {
    const { getByText } = render(<Card { ...props} />);
    expect(getByText(product.name)).not.toBeNull();
    expect(getByText(`${basket.length} Added`)).not.toBeNull();
  });
});