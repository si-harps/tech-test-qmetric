import React from 'react';
import { Saving } from './../types/basket';

interface Props {
  savings: Saving[];
}

const BasketSavings: React.FC<Props> = ({ savings }) => {

  return (
    <div className="basket-row">
      <span>Savings</span>
      <ul>
        { savings.map( (saving, i) => <li key={i}>
          <span className="basket-info product-name">{ saving.name }</span> 
          <span className="basket-info product-count pull-right">-{ saving.value.toFixed(2) }</span>
        </li> )}
      </ul>
    </div>
  );
}

export default BasketSavings;