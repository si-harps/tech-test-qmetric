import React from 'react';
import { useDispatch } from 'react-redux';
import { AggregatedProduct } from './../types/product';
import { addToBasket, removeFromBasket, removeItemFromBasket } from './../actions/basket';

interface Props {
  product: AggregatedProduct;
}

const BasketItemCounter: React.FC<Props> = ({ product }) => {

  const dispatch = useDispatch();

  return (
    <div className="basket-counter">
      <span className="basket-action clickable" onClick={ e => dispatch(removeFromBasket(product, product.unit))}>-</span>
      <span className="basket-count">{ product.units }</span>
      <span className="basket-action clickable"  onClick={ e => dispatch(addToBasket(product, product.unit))}>+</span>
    </div>
  );
}

export default BasketItemCounter;