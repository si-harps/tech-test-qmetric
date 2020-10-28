import * as ActionTypes from './../constants/ActionTypes';
import { BasketState, BasketActionTypes } from './../types/basket';
import { basketCalulator, savingsCalculator } from '../util/calculator';

const initialState = {
  list: [],
  subtotal: 0,
  savings: [],
  totalSavings: 0,
  total: 0
}

const basketReducer = (
  state: BasketState = initialState, 
  action: BasketActionTypes
): BasketState => {

  let list,
    subtotal,
    savings,
    totalSavings;

  switch (action.type) {
    
    case ActionTypes.ADD_TO_BASKET:
      
      const units = action.data.aggregate
        ? Math.round(action.units / action.data.unit)
        : action.units;
      
      list = state.list.concat([...Array(units).keys()].map( () => action.data ));
      subtotal = basketCalulator(list);
      savings = savingsCalculator(list);
      totalSavings = savings.reduce( (acc, saving) => acc + saving.value, 0);

      return {
        list: list.sort( (a, b) => a.id - b.id),
        subtotal,
        savings,
        totalSavings,
        total: subtotal - totalSavings
      }

    case ActionTypes.REMOVE_FROM_BASKET:

      const productId = action.data.id;
      const indexFrom = state.list.findIndex( product => product.id === productId);
      
      list = state.list.filter( (_, i) => i !== indexFrom);
      subtotal = basketCalulator(list);
      savings = savingsCalculator(list);
      totalSavings = savings.reduce( (acc, saving) => acc + saving.value, 0);

      return {
        list: list.sort( (a, b) => a.id - b.id),
        subtotal,
        savings,
        totalSavings,
        total: subtotal - totalSavings
      }
    
    case ActionTypes.REMOVE_ITEM_FROM_BASKET:

      list = state.list.filter( product => product.id !== action.data.id);
      subtotal = basketCalulator(list);
      savings = savingsCalculator(list);
      totalSavings = savings.reduce( (acc, saving) => acc + saving.value, 0);

      return {
        list: list.sort( (a, b) => a.id - b.id),
        subtotal,
        savings,
        totalSavings,
        total: subtotal - totalSavings
      }

    default: 
      return state
  }
}

export default basketReducer;