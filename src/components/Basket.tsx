import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { BasketState } from './../types/basket';
import { BasketList } from './';

const Basket: React.FC = () => {

  const { 
    list, 
    subtotal, 
    savings,
    totalSavings,
    total 
  }: BasketState = useSelector( state => state.basket);

  if (!list.length)
    return (
      <div className="basket">Basket Empty</div>
    );
  
  return (
    <div className="basket">
      <BasketList list={list} />
    </div>
  )
}

export default Basket;