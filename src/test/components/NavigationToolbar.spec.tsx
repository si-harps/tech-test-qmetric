import React from 'react';
import { render } from '@testing-library/react'; 
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { NavigationToolbar } from './../../components';
import { BasketState } from './../../types/basket';

describe('Component: NavigationToolbar', () => {

  const mockStore = configureStore();

  let store: any;

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
  })

  test('renders toolbar component', () => {
    render(<Provider store={store}><NavigationToolbar /></Provider>);
  });

  test('matches snapshot', () => {
    const { asFragment } = render(<Provider store={store}><NavigationToolbar /></Provider>);
    expect(asFragment()).toMatchSnapshot();
  });

  test('toolbar contains view title', () => {
    const title = 'Products';
    const { getByText } = render(<Provider store={store}><NavigationToolbar /></Provider>);
    expect(getByText(title)).not.toBeNull();
  });

});