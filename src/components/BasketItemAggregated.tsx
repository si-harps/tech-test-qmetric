import React from 'react';
import { AggregatedProduct } from './../types/product';
import { BasketItemCounter } from './';

interface Props {
  product: AggregatedProduct;
}

const BasketItemAggregated: React.FC<Props> = ({ product }) => {

  return (
    <div className="basket-row">
      <span className="basket-info product-name">{ product.name }</span>
      <BasketItemCounter product={product} />
      <div className="basket-row">
        <span className="basket-info product-name">{ product.units.toFixed(2) } { product.measurement } @ { product.price }/{ product.measurement }</span>
        <span className="basket-info product-count pull-right">{ (product.price * product.units).toFixed(2) }</span>
      </div>
    </div>
  );
}

export default BasketItemAggregated;