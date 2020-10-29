import { Product } from './product';
import * as ActionTypes from './../constants/ActionTypes';

export interface Saving {
  name: string;
  value: number;
}

export interface BasketState {
  list: Product[];
  subtotal: number;
  savings: Saving[];
  totalSavings: number;
  total: number;
}

interface AddToBasketAction {
  type: typeof ActionTypes.ADD_TO_BASKET;
  data: Product;
  units: number;
}

interface RemoveFromBasketAction {
  type: typeof ActionTypes.REMOVE_FROM_BASKET;
  data: Product;
  units: number;
}

interface RemoveItemFromBasketAction {
  type: typeof ActionTypes.REMOVE_ITEM_FROM_BASKET;
  data: Product;
}

export type BasketActionTypes = 
  AddToBasketAction |
  RemoveFromBasketAction |
  RemoveItemFromBasketAction;