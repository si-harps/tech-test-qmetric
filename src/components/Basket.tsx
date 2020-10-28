import React from 'react';
import { useSelector } from 'react-redux';
import { BasketState } from './../types/basket';

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
      Basket Items
    </div>
  )
}

export default Basket;