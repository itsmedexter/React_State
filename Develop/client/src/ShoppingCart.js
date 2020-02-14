import React from 'react';
import {Link} from 'react-router-dom';

const ShoppingCart = props => {
    return (<div>
        <Link to="/"><button>Products</button></Link>
        {props.cart.map(product => {
            return (
                <>                
                <h3>{product.name}</h3>
                <p>{product.longDescription}</p>
                <button onClick={() => props.removeFromCart(product)}>Remove From Cart</button>
                <br /><br />
                </>
            )
        } )}
    </div>)
}

export default ShoppingCart;