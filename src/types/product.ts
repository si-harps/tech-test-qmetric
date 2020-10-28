export interface Product {
  id: number;
  name: string;
  price: number;
  unit: number;
  discount: number;
  aggregate: boolean;
  measurement: string | boolean;
}