import React, { Fragment } from 'react';
import { AggregatedProduct } from './../types/product';
import { BasketItemCounter } from './';

interface Props {
  product: AggregatedProduct;
}

const BasketItemAggregated: React.FC<Props> = ({ product }) => {

  return (
    <Fragment>
      <div className="basket-row top">
        <span className="basket-info product-name">{ product.name }</span>
        <BasketItemCounter product={product} />
      </div>
      <div className="basket-row bottom">
        <div className="basket-unit">
          <span className="basket-info product-name">{ product.units.toFixed(2) } { product.measurement } @ { product.price }/{ product.measurement }</span>
          <div className="basket-info product-count pull-right">{ (product.price * product.units).toFixed(2) }</div>
        </div>
      </div>
    </Fragment>
  );
}

export default BasketItemAggregated;