import React from 'react';
import { render } from '@testing-library/react'; 
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BasketItem } from './../../components';
import { AggregatedProduct } from './../../types/product';
import { BasketState } from './../../types/basket';

describe('Component: BasketItem', () => {

  const mockStore = configureStore();

  let store: any,
    product: AggregatedProduct;

  beforeEach( () => {

    const basket: BasketState = {
      list: [],
      subtotal: 0,
      savings: [],
      totalSavings: 0,
      total: 0
    }

    const initialState = {
      basket
    }

    store = mockStore(initialState);

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
    render(<Provider store={store}><BasketItem product={product} /></Provider>);
  });

  test('matches snapshot', () => {
    const { asFragment } = render(<Provider store={store}><BasketItem product={product} /></Provider>);
    expect(asFragment()).toMatchSnapshot();
  });
});