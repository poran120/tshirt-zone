import React from 'react';
import './Cart.css'

const Cart = ({cart, removeFromCart}) => {
    // console.log(cart);
let command;
if(cart.length === 0){
    command = <p>Please add atleast one item!!</p>
}
else if(cart.length === 1){
    command = <p>Add more</p>
}
else{
    command = <p>Thanks for add items</p>
}

    return (
        <div>
            <h5>Selected Items {cart.length}</h5>
            {command}
            {
                cart.map(item => <h5>
                {item.name}
                <button className='remove_button' onClick={() => removeFromCart(item)}>X</button>
                </h5>)
            }
        </div>
    );
};

export default Cart;