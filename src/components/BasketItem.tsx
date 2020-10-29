import React from 'react';
import { AggregatedProduct } from './../types/product';
import { BasketItemCounter } from './';

interface Props {
  product: AggregatedProduct;
}

const BasketItem: React.FC<Props> = ({ product }) => {

  return (
    <div className="basket-row">
      <span className="basket-info product-name">{ product.name }: { product.price.toFixed(2) }</span>
      <BasketItemCounter product={product} />
      <span className="basket-info product-count pull-right">{ (product.price * product.units).toFixed(2) }</span>
    </div>
  );
}

export default BasketItem;