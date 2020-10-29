import * as ActionTypes from './../../constants/ActionTypes';
import { addToBasket, removeFromBasket, removeItemFromBasket } from './../../actions/basket';
import { Product } from './../../types/product';
import { BasketActionTypes } from './../../types/basket'

describe('Actions: basket', () => {

  let product: Product,
    expectedAction: BasketActionTypes;

  beforeEach( () => {

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

  test('add to basket action creator', () => {

    expectedAction = {
      type: ActionTypes.ADD_TO_BASKET,
      data: product,
      units: 1
    };

    expect(addToBasket(product, 1)).toEqual(expectedAction);
  });

  test('remove single product from basket action creator', () => {

    expectedAction = {
      type: ActionTypes.REMOVE_FROM_BASKET,
      data: product,
      units: 1
    };

    expect(removeFromBasket(product, 1)).toEqual(expectedAction);
  });

  test('remove product type from basket action creator', () => {

    expectedAction = {
      type: ActionTypes.REMOVE_ITEM_FROM_BASKET,
      data: product
    };

    expect(removeItemFromBasket(product)).toEqual(expectedAction);
  });
});
