import React from 'react';

interface Props {
  text: string;
  value: number;
}

const BasketRow: React.FC<Props> = ({ text, value }) => {

  return (
    <div className="basket-row">
      <span className="basket-info product-name">{ text }</span>
      <span className="basket-info product-count pull-right">{ value.toFixed(2) }</span>
    </div>
  );
}

export default BasketRow;