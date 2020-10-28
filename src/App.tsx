import React, { Fragment } from 'react';
import { CssBaseline, Container } from '@material-ui/core';
import { NaviationToolbar, ProductList } from './components';

import './App.css';

const App: React.FC = () => {

  return (<Fragment>
    <CssBaseline />
    <NaviationToolbar />
    <Container maxWidth="lg">
      <ProductList />
    </Container>
  </Fragment>);
}

export default App;
