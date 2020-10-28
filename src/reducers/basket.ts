import * as ActionTypes from './../constants/ActionTypes';
import { BasketState, BasketActionTypes } from './../types/basket';

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

  switch (action.type) {
    
    case ActionTypes.ADD_TO_BASKET:      
      return state;

    case ActionTypes.REMOVE_FROM_BASKET:
      return state;
    
    case ActionTypes.REMOVE_ITEM_FROM_BASKET:
      return state;

    default: 
      return state
  }
}

export default basketReducer;