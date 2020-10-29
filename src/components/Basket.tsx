import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { BasketState } from './../types/basket';
import { BasketList, BasketRow, BasketSavings, BasketDivider } from './';

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
      <BasketDivider />
      <BasketRow text="Subtotal" value={subtotal} />
      { !!savings.length && <Fragment><BasketDivider /><BasketSavings savings={savings} /></Fragment>}
      { totalSavings > 0 && <Fragment><BasketDivider /><BasketRow text="Total Savings" value={totalSavings} /></Fragment> }
      <BasketDivider />
      <BasketRow text="Total to Pay" value={total} />
    </div>
  )
}

export default Basket;