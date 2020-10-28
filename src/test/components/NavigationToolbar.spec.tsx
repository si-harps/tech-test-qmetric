import React from 'react';
import { render } from '@testing-library/react'; 
import { NaviationToolbar } from './../../components';

describe('Component: NavigationToolbar', () => {

  test('renders basket component', () => {
    render(<NaviationToolbar />);
  });

  test('matches snapshot', () => {
    const { asFragment } = render(<NaviationToolbar />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('toolbar contains view title', () => {
    const title = 'Products';
    const { getByText } = render(<NaviationToolbar />);
    expect(getByText(title)).not.toBeNull();
  });

});