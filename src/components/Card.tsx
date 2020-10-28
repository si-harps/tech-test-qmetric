import React, { MouseEvent, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Button } from '@material-ui/core';
import { Product } from './../types/product';
import { Add, Check } from '@material-ui/icons';

const useStyles = makeStyles( theme => ({
  card: {
    cursor: 'pointer'
  },
  tile: {
    padding: '20px'
  },
  title: {
    flexGrow: 1,
  },
  thumbnail: {
    width: '100%',
    height: '200px',
    backgroundColor: '#f6f6f6',
    margin: '20px 0 0 0'
  },
  basketLink: {
    padding: '20px 0 0 0'
  }
}));

interface Props {
  product: Product,
  basket: Product[],
  updateBasket(e: MouseEvent, product: Product, units: number): void;
}

const Card: React.FC<Props> = ({ product, basket, updateBasket }) => {

  const classes = useStyles();
  const [ basketUnits, setBasketUnits ] = useState<number>(0)

  useEffect( () => {

    let units = 0;
    
    for (let inBasket of basket) {
      if (inBasket.id === product.id) {
        units++;
      }
    }

    setBasketUnits(units);

  }, [basket, product.id]);

  return (
    <div className={classes.card}>
      <Paper className={classes.tile}>
        <Typography variant="h6" className={classes.title}>{ product.name }</Typography>
        <div className={classes.thumbnail} />
        <div className={classes.basketLink}>
          <Button
            className="full-width" 
            variant="contained" 
            color="primary" 
            onClick={ e => updateBasket(e, product, product.unit)}
            startIcon={ basketUnits ? <Check /> : <Add />}
          >
              { basketUnits ? `${basketUnits * product.unit} Added` : 'Add to Basket' }
          </Button>
        </div>
      </Paper>
    </div>
  )
}

export default Card;