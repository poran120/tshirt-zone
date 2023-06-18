import React, { useState } from 'react';
import './Home.css'
import Cart from '../Cart/Cart'
import useTshirt from '../../hooks/useTshirt';
import StylishTshirt from '../StylishTshirt/StylishTshirt';



const Home = () => {

const [tshirts, setTshirts] = useTshirt();
const [cart, setCart] = useState([]);


const addToCart = (selectedItem) =>{
    const exists = cart.find(tshirt => tshirt._id === selectedItem._id);
    if(!exists){
        const newCart = [...cart, selectedItem];
        setCart(newCart)
    }
    else{
        alert('Item already added')
    }
}

const removeFromCart = (selectedItem)=>{
// console.log(selectedItem);
const restItem = cart.filter(tshirt => tshirt._id !== selectedItem._id)
setCart(restItem)
}

    return (
        <div className='home_container'>
            <div className='product_container'>
                {
                    tshirts.map(tshirt => <StylishTshirt
                    key={tshirt._id}
                    tshirt = {tshirt}
                    addToCart={addToCart}
                    ></StylishTshirt>)
                }
            </div>
            <div className='cart_container'>
                <Cart cart={cart}
                removeFromCart={removeFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;