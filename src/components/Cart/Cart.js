import React from 'react';
import'./Cart.css'

const Cart = (props) => {
    const {cart} = props
    let total = 0
    let called = ' '
    for(const product of cart){
        total = total + product.price
        called = called + ', ' + product.name
    }
    return (
      <div className= 'calculate-side'>
        <h1>Writers Added:{props.cart.length}</h1>
        <h2>Slected Names: {called}</h2>
        <h3>Total Cost: ${total}</h3>
        <button className='btn'>Connect Store</button>
      </div>
    );
};

export default Cart;