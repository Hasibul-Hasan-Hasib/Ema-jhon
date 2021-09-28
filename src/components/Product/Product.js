import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const element = <FontAwesomeIcon icon={faShoppingCart} />;
    const { name, img, seller,price,stock } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="info">
                <h3 className="product-name">{name}</h3>
                <h3>by: {seller}</h3>
                <h3>${price}</h3>
                <h5>only {stock} left in stock - order soon</h5>
                <button onClick={() => props.handleAddToCart(props.product)} className="btn-regular">{element} Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;