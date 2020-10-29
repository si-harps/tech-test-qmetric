import React, { Fragment, MouseEvent, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Button, ButtonGroup } from '@material-ui/core';
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
  destroyProduct(e: MouseEvent, product: Product): void;
}

const Card: React.FC<Props> = ({ product, basket, updateBasket, destroyProduct }) => {

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

          { !!basketUnits && <ButtonGroup className="full-width">
              <Button
                className="col-9" 
                variant="contained" 
                color="primary" 
                onClick={ e => updateBasket(e, product, product.unit)}
                startIcon={<Check /> }
              >
                {`${basketUnits * product.unit} Added` }
            </Button>
            <Button
                className="col-3" 
                variant="contained" 
                color="secondary" 
                onClick={ e => destroyProduct(e, product)}
              >
                x
            </Button>
          </ButtonGroup> }

          { !!!basketUnits && <Button
              className="full-width" 
              variant="contained" 
              color="primary" 
              onClick={ e => updateBasket(e, product, product.unit)}
              startIcon={<Add />}
            >
              Add to Basket
          </Button> }

        </div>
      </Paper>
    </div>
  )
}

export default Card;