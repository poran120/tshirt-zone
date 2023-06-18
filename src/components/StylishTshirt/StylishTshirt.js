import React from 'react';
import './StylishTshirt.css'

const StylishTshirt = ({addToCart, tshirt}) => {
    const {picture, name, id, price, gender} = tshirt;
    return (
        <div className='product_details'>
            <img src={picture}></img>
            <h4><span>Product Name:</span> {name}</h4>
            <h4>Product Price: ${price}</h4>
            <button onClick={() => addToCart(tshirt)}>Add to Cart</button>
        </div>
    );
};

export default StylishTshirt;