import React, { useState, MouseEvent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Popover, IconButton, Typography, Badge } from '@material-ui/core';
import { ShoppingCartOutlined } from '@material-ui/icons';

const useStyles = makeStyles( theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  basketButton: {
    float: 'right',
    color: 'white'
  },
  title: {
    flexGrow: 1,
  },
}));

const NaviationToolbar: React.FC = () => {

  const classes = useStyles();
  const [ anchorEl, setAnchorEl ] = useState<HTMLElement | null>(null);

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open 
    ? 'basket' 
    : undefined;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Products
          </Typography>
          <IconButton aria-describedby={id} className={classes.basketButton} onClick={handleClick}>
            <Badge badgeContent={0} color="secondary">
              <ShoppingCartOutlined />
            </Badge>
          </IconButton>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            transformOrigin={{ vertical: 'top', horizontal: 'center' }}
          >
            QMetric
          </Popover>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NaviationToolbar;