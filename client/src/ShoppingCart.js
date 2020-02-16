import React from 'react';
import {Link} from 'react-router-dom';

const ShoppingCart = props => {
    return (<div>
        <Link to="/"><button>Products</button></Link><br /><br /> 

        {props.cart.map(product => {
            return (
                <>
                <h3>{product.name}</h3>
                <p>{"Sale Price: $" + product.salePrice}<br />
                    {product.longDescription}</p>
                <button onClick={() => props.removeFromCart(product)}>Remove From Cart</button>
                <br /><br />
                </>
            )
        } )}
    </div>)
}

export default ShoppingCart;