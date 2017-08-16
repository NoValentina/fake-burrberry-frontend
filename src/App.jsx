import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'normalize.css/normalize.css';
import 'flexboxgrid2/dist/flexboxgrid.css';
import './index.css';

// components
import Header from './Header';
import Footer from './Footer';
import Products from './Products';
import Product from './Product';

const App = () =>
  (<Router>
    <div className="app">
      <Header />
      <Route exact path="/products" component={Products} />
      <Route path="/products/:id" component={Product} />
      <Footer />
    </div>
  </Router>);

export default App;
