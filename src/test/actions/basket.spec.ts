import * as ActionTypes from './../../constants/ActionTypes';
import { addToBasket, removeFromBasket, removeItemFromBasket } from './../../actions/basket';
import { Product } from './../../types/product';

describe('Actions: basket', () => {

  let product: Product;

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

    const data: Product = product;
    const units = 1;
    const expectedAction = {
      type: ActionTypes.ADD_TO_BASKET,
      data,
      units
    };

    expect(addToBasket(data, units)).toEqual(expectedAction);
  });

  test('remove from basket action creator', () => {

    const data: Product = product;
    const units = 1;
    const expectedAction = {
      type: ActionTypes.REMOVE_FROM_BASKET,
      data,
      units
    };

    expect(removeFromBasket(data, units)).toEqual(expectedAction);
  });

  test('remove from basket action creator', () => {

    const data: Product = product;
    const expectedAction = {
      type: ActionTypes.REMOVE_ITEM_FROM_BASKET,
      data
    };

    expect(removeItemFromBasket(data)).toEqual(expectedAction);
  });
});
