import React from 'react';
import {Link} from 'react-router-dom';

import SearchBar from './SearchBar';

const Products = props => {
    console.log(props.products)
    const isInCart = product => props.cart.some(cartItem => cartItem === product);
    return (<div>
        {props.products.length === 0 && <h1>Loading ......</h1>}


        <div>
            <Link to="/cart">Cart</Link>
            <SearchBar handleSearch={props.getProducts} />
        {props.products.length > 0 && props.products.map(product => {
            const inCart = isInCart(product);
            return <div>
                <img src={product.mediumImage} />
                <h3>{product.name}</h3>
                <p>{product.productId}<br />
                    {product.longDescription}
                </p>
                {!inCart && <button onClick={() => props.addToCart(product)}>Add to Cart</button>}
                {inCart && <button onClick={() => props.removeFromCart(product)}>Remove From Cart</button>}
            </div>
        })}
        </div>
    </div>)
}

export default Products;