import * as ActionTypes from './../constants/ActionTypes';
import { Product } from './../types/product';

export const addToBasket = (data: Product, units: number) => ({
  type: ActionTypes.ADD_TO_BASKET,
  data,
  units
});

export const removeFromBasket = (data: Product, units: number) => ({
  type: ActionTypes.REMOVE_FROM_BASKET,
  data,
  units
});

export const removeItemFromBasket = (data: Product) => ({
  type: ActionTypes.REMOVE_ITEM_FROM_BASKET,
  data
});