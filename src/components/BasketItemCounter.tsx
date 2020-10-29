import React from 'react';
import { useDispatch } from 'react-redux';
import { ButtonGroup, Button } from '@material-ui/core';
import { AggregatedProduct } from './../types/product';
import { addToBasket, removeFromBasket, removeItemFromBasket } from './../actions/basket';

interface Props {
  product: AggregatedProduct;
}

const BasketItemCounter: React.FC<Props> = ({ product }) => {

  const dispatch = useDispatch();

  return (
    <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
      <Button onClick={ e => dispatch(removeFromBasket(product, product.unit))}>-</Button>
      <Button onClick={ e => e.preventDefault()} style={{ backgroundColor: 'white', color: 'black' }}>{ product.units }</Button>
      <Button onClick={ e => dispatch(addToBasket(product, product.unit))}>+</Button>
      <Button onClick={ e => dispatch(removeItemFromBasket(product))}>x</Button>
    </ButtonGroup>
  );
}

export default BasketItemCounter;