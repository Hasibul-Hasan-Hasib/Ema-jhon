import React from 'react';
import './Cart.css';
import '../../utilities/fakedb';

const Cart = (props) => {
    const {cart} = props;
    let tax = 0.05;
    let delivery = 5;
    let total = 0;
    let totalWithDelivery = 0;
    let totalWithTax = 0;
    let estimateTax = 0;
    for(const product of cart){
        total = total + product.price;
        totalWithDelivery = total + delivery;
        estimateTax = totalWithDelivery*tax;
        totalWithTax = totalWithDelivery + totalWithDelivery*tax;
    }
    return (
        <div>
            <h2>Order Summery</h2>
            <h3>Item ordered: {cart.length}</h3>
            <div className="cart-info-container">
                <div className="cart-info"><h5>Items: </h5><h5>${total.toFixed(2)}</h5></div>
                <div className="cart-info"><h5>Shipping & Handing: </h5><h5>${delivery.toFixed(2)}</h5></div>
                <div className="cart-info"><h5>Total before tax: </h5><h5>${totalWithDelivery.toFixed(2)}</h5></div>
                <div className="cart-info"><h5>Estimated tax: </h5><h5>${estimateTax.toFixed(2)}</h5></div>
                <div className="cart-info"><h5 className="order">Order: </h5><h5 className="order">${totalWithTax.toFixed(2)}</h5></div>
            </div>
            <button className="btn-regular">Order now:</button>
        </div>
    );
};

export default Cart;