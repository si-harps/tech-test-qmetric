import React from 'react';
import { render } from '@testing-library/react'; 
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Basket } from './../../components';
import { Product } from './../../types/product';
import { BasketState } from './../../types/basket';
 
describe('Basket', () => {

  const mockStore = configureStore();

  let store: any,
    product: Product;

  beforeEach( () => {

    let basket: BasketState = {
      list: [],
      subtotal: 0,
      savings: [],
      totalSavings: 0,
      total: 0
    }

    let initialState = {
      basket
    }

    store = mockStore(initialState);

    product = {
      id: 1,
      name: 'Test Product',
      price: 10,
      unit: 1,
      discount: 0,
      aggregate: false,
      measurement: false
    }
  });

  test('renders basket component', () => {
    render(<Provider store={store}><Basket /></Provider>);
  });

  test('matches snapshot', () => {
    const { asFragment } = render(<Provider store={store}><Basket /></Provider>);
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders basket component with base text', () => {
    const { getByText } = render(<Provider store={store}><Basket /></Provider>);
    expect(getByText(/[A-Za-z]/)).not.toBeNull();
  });
});