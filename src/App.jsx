import React from 'react';
import 'normalize.css/normalize.css';
import 'flexboxgrid2/dist/flexboxgrid.css';
import './index.css';

// components
import Header from './Header';
import Footer from './Footer';
import Product from './Product';

const App = () =>
  (<div className="app">
    <Header />
    <Product />
    <Footer />
  </div>);

export default App;
