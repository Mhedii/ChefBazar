import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    let total = 0;

    for (const chefdetail of cart) {
        total += chefdetail.cost;
    }
    console.log(cart)
    return (
        <div className="order">
            <h2>Order Summary</h2>
            <h3>Number of Chef:{props.cart.length}</h3>
            <h3>Total:{total}</h3>

        </div>
    );
};

export default Cart;