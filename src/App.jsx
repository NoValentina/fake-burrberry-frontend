import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import 'normalize.css/normalize.css';
import 'flexboxgrid2/dist/flexboxgrid.css';
import './index.css';

// components
import Header from './Header';
import Footer from './Footer';
import Products from './Products';
import Product from './Product';
import Menu from './Menu';

const App = () =>
  (<Router>
    <div className="app">
      <Header />
      <Menu />
      <Switch>
        <Route exact path="/products/:category" component={Products} />
        <Route path="/products/:category/:id" component={Product} />
        <Redirect from="/" to="/products/men/" />
      </Switch>
      <Footer />
    </div>
  </Router>);

export default App;
