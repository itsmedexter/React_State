import React from 'react';

import SearchBar from './SearchBar';

const Products = props => {
    console.log(props.products)
    
    return (<div>
        {props.products.length === 0 && <h1>Loading ......</h1>}


        <div>
            <SearchBar handleSearch={props.getProducts} />
        {props.products.length > 0 && props.products.map(product => {
            return <div>
                <img src={product.mediumImage} />
                <h3>{product.name}</h3>
                <p>{product.productId}<br />
                    {product.longDescription}
                </p>

            </div>
        })}
        </div>
    </div>)
}

export default Products;