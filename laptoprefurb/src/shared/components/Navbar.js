import React from 'react';
import './navbar.css';
import cartImage from './cart.png';
import searchImage from './search.png';

const Navbar = () => {
  return (
    <div className='Navbar-Container'>
      <div className='welcome-box'>
        <p>Welcome to our store</p>
      </div>
      <div className='action-container'>
        <img className="search-icon" src={searchImage} alt='Cart Icon' />
        <p>GoLaptops    </p>
        <img className="cart-icon" src={cartImage} alt='Cart Icon' />
      </div>
    </div>
  );
};

export default Navbar;
