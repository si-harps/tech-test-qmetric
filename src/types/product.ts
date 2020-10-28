import * as ActionTypes from './../constants/ActionTypes';

export interface Product {
  id: number;
  name: string;
  price: number;
  unit: number;
  discount: number;
  aggregate: boolean;
  measurement: string | boolean;
}

export interface AggregatedProduct extends Product {
  units: number;
}

export interface ProductListState {
  list: Product[];
  mounted: Product | null;
}

export interface FetchProductsAction {
  type: typeof ActionTypes.FETCH_PRODUCTS;
  data: Product[];
}

export type ProductActionTypes = FetchProductsAction;