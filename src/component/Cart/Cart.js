import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props
    let total = 0;
    for (const product of cart) {
        total = total + product.price;
    }
    return (

        <div className='cart'>
            <h3>Who you are choosing ?</h3>
            <p>Waiting List: {cart.length}</p>
            <p>Total Salary: ${total}</p>
        </div>
    );
};

export default Cart;
