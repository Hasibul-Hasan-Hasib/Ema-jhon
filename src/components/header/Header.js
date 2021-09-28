import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className="logo-container"><img className="logo" src={logo} alt="" /></div>
            <div className="nav-search">
                <nav className="nav">
                    <a href="/shop" className="link">Shop</a>
                    <a href="/orders" className="link">Order Review</a>
                    <a href="/inventory" className="link">Manage Inventory here</a>
                </nav>
                <div className="search-cart">
                    <input className="search-bar" type="text" placeholder="Search The Product You Need" />
                    <button className="cart">Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Header;