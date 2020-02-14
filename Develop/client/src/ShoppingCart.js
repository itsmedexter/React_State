import React from 'react';
import {Link} from 'react-router-dom';

const ShoppingCart = props => {
    return (<div>
        <Link to="/"><button>Products</button></Link>
        {props.cart.map(product => {
            return (
                <>
                <p>{product.longDescription}</p>
                <p>{product.name}</p>
                <button onClick={() => props.removeFromCart(product)}>Remove From Cart</button>
                </>
            )
        } )}
    </div>)
}

export default ShoppingCart;