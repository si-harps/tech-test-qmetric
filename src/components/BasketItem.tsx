import React from 'react';
import { AggregatedProduct } from './../types/product';
import { BasketItemCounter } from './';

interface Props {
  product: AggregatedProduct;
}

const BasketItem: React.FC<Props> = ({ product }) => {

  return (
    <div className="basket-row top">
      <div className="basket-info product-name">{ product.name }: { product.price.toFixed(2) }</div>
      <BasketItemCounter product={product} />
      <div className="basket-info product-count pull-right">{ (product.price * product.units).toFixed(2) }</div>
    </div>
  );
}

export default BasketItem;