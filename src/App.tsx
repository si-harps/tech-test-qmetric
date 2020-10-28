import React, { Fragment } from 'react';
import { CssBaseline, Container } from '@material-ui/core';
import { NavigationToolbar, ProductList } from './components';

import './App.css';

const App: React.FC = () => {

  return (<Fragment>
    <CssBaseline />
    <NavigationToolbar />
    <Container maxWidth="lg">
      <ProductList />
    </Container>
  </Fragment>);
}

export default App;
