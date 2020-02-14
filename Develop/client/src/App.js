import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';
import {useMappedState} from 'react-use-mapped-state';
// useMappedState useful react hook for managed state using a Map as the data structure
import './App.css';
import Products from './Products';
import ShoppingCart from './ShoppingCart';
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import { Container, Row, Col } from "./components/Grid/index";


// import User from "../server/models/User";

// function App() {
//   return <User />;
// /?q=${query}}


const App = () => {
  // const [products, setProducts] = useState([]);
  // const [cart, setCart] = useState([]);
  const [{ products, cart }, valueSetter] = useMappedState({ products: [], cart: [] });
  const getProducts = query => {
    axios.get(`/api/products?q=${query}`)
      //  axios.get(`/api/products`, { params: { q: query }})
      .then(({ data }) => {
        console.log(data);
        valueSetter('products', data);
      })
      .catch(err => console.log(err));
  }
  useEffect(() => {
    getProducts('television')

  }, []);

  //Add to Cart
  const addToCart = product => {
    const newCart = [...cart, product];
    valueSetter('cart', newCart);
  }
  //Remove from Cart
  const removeFromCart = product => {
    const newCart = cart.filter(cartItem => cartItem !== product);
    valueSetter('cart', newCart);
  }

  console.log('Our Current Cart', cart)
  return (
    <Router>
      <div className="App">
      <Container>

        <Jumbotron />
        <Container>
          <Row>
            <Col size="md-12">
            </Col>
          </Row>
        </Container>
        
            <Col size="md-12">
              <Route
                exact path="/"
                component={() =>
                  <Products
                    getProducts={getProducts}
                    products={products}
                    addToCart={addToCart}
                    cart={cart}
                    removeFromCart={removeFromCart} />} />
              <Route exact path="/cart" component={() => <ShoppingCart
                cart={cart}
                removeFromCart={removeFromCart}
              />} />

            </Col>
            </Container>

      </div>
    </Router>
  );
}

export default App;
