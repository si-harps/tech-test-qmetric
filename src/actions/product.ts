import { Dispatch } from 'react';
import * as ActionTypes from './../constants/ActionTypes';
import { ProductActionTypes } from './../types/product';

export const fetchProducts = () => async (dispatch: Dispatch<ProductActionTypes>) => {

  const response = await fetch('./api/products.json');

  if (!response.ok)
    throw new Error();

  const data = await(response.json())

  dispatch ({
    type: ActionTypes.FETCH_PRODUCTS,
    data
  });
}