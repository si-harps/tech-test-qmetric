import React, { memo, useEffect, MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './../actions/product';
import { addToBasket } from './../actions/basket';
import { Product } from './../types/product';
import { Card } from './../components';

const ProductList: React.FC = () => {

  const products: Product[] = useSelector( state => state.product.list);
  const basket: Product[] = useSelector( state => state.basket.list);

  const dispatch = useDispatch();

  useEffect( () => {
    dispatch(fetchProducts())
  }, [dispatch]);

  const updateBasket = (e: MouseEvent, product: Product, units: number): void => {
    e.preventDefault();
    dispatch(addToBasket(product, units));
  }

  if (!products.length)
    return (<div>Loading...</div>);

  return (
    <div className="wrapper">
      <div className="grid">
        { products.map( product => <Card
          key={product.id}
          product={product}
          basket={basket}
          updateBasket={updateBasket}
        /> )}
      </div>
    </div>
  );
}

export default memo(ProductList);