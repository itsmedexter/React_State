import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';
import {useMappedState} from 'react-use-mapped-state';

import './App.css';
import Products from './Products';
import ShoppingCart from './ShoppingCart';

// import User from "../server/models/User";

// function App() {
//   return <User />;
// /?q=${query}}


const App = () => {
  const [{products, cart}, valueSetter] = useMappedState({products: [],cart:[]});
  const getProducts = query => {
    axios.get(`/api/products?q=${query}`)
    //  axios.get(`/api/products`, { params: { q: query }})
    .then(({data}) => {
      console.log(data);
      valueSetter('products',data);
    })
    .catch(err => console.log(err));
  }
  useEffect(() => {
    getProducts('television')
    
  }, []);

  //Add toc art
  const addToCart = product => {
    const newCart = [...cart, product];
    valueSetter('cart',newCart);
  }
  //Remove from Cart
  const removeFromCart = product => {
    const newCart = cart.filter(cartItem => cartItem !== product);
    valueSetter('cart',newCart);
  }

  console.log('Our Current Cart', cart)
  return (
    <Router>
    <div className="App">
     <Route 
     exact path="/" 
     component={() => <Products 
                      getProducts={getProducts} 
                      products={products}
                      addToCart={addToCart}
                      cart={cart}
                      removeFromCart={removeFromCart} />} />
     <Route exact path="/cart" component={() => <ShoppingCart
     cart={cart}
     removeFromCart={removeFromCart}
     />} />
    </div>
    </Router>
  );
}

export default App;
