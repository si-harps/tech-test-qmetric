import { combineReducers } from "redux";
import productReducer from './product';
import basketReducer from './basket';

export const rootReducer = combineReducers({
  product: productReducer,
  basket: basketReducer
});

export type RootState = ReturnType<typeof rootReducer>