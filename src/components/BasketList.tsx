import React from 'react';
import { AggregatedProduct, Product } from './../types/product';
import { BasketItem, BasketItemAggregated } from './'

interface Props {
  list: Product[];
}

const BasketList: React.FC<Props> = ({ list }) => {

  const aggregateProducts = (list: Product[]): AggregatedProduct[] => {

    const productMap: AggregatedProduct[] = [];
    const aggregateIds: number[] = [];

    for(let product of list) {
      
      if (!~aggregateIds.indexOf(product.id)) {
        productMap.push({ ...product, units: product.unit });
        aggregateIds.push(product.id);
      } else {
        let index = productMap.findIndex( map => map.id === product.id);
        productMap[index].units += product.unit;
      }
    }

    return productMap;
  }

  return (
    <div className="basket-list">
      { aggregateProducts(list).map( product => product.aggregate
        ? <BasketItemAggregated key={product.id} product={product} />
        : <BasketItem key={product.id} product={product} /> )
      }
    </div>
  )
}

export default BasketList;