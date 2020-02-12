import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';

import './App.css';
import Products from './Products';
import ShoppingCart from './ShoppingCart';

// import User from "../server/models/User";

// function App() {
//   return <User />;
// /?q=${query}}


const App = () => {
  const [products, setProducts] = useState([]);
  const getProducts = query => {
    axios.get(`/api/products?q=${query}`)
    //  axios.get(`/api/products`, { params: { q: query }})
    .then(({data}) => {
      console.log(data);
      setProducts(data);
    })
    .catch(err => console.log(err));
  }
  useEffect(() => {
    getProducts('television')
    
  }, []);


  return (
    <Router>
    <div className="App">
     <Route exact path="/" component={() => <Products getProducts={getProducts} products={products} />} />
     <Route exact path="/cart" component={() => <ShoppingCart />} />
    </div>
    </Router>
  );
}

export default App;
