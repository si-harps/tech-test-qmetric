import { combineReducers } from "redux";
import productReducer from './product';

export const rootReducer = combineReducers({
  product: productReducer
});

export type RootState = ReturnType<typeof rootReducer>