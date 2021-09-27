import React from 'react';
import logo from '../images/rokomari_logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <h1 className='text1'>Welcome to Writer Shop</h1>
            <img className='logo' src={logo} alt="" />
            <h3 className='text1'>Total Budget: 100K</h3>
        </div>
    );
};

export default Header;