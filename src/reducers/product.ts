import * as ActionTypes from './../constants/ActionTypes';
import { ProductListState, ProductActionTypes } from './../types/product';

const initialState = {
  list: [],
  mounted: null
}

const productReducer = (state: ProductListState = initialState, action: ProductActionTypes): ProductListState => {

  switch (action.type) {

    case ActionTypes.FETCH_PRODUCTS:
      return {
        ...state,
        list: action.data
      }
      
    default: 
      return state
  }
}

export default productReducer;