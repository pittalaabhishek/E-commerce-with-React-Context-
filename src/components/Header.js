import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>My Shop</h1>
      <Link to="/cart">
        <button>My Cart</button>
      </Link>
      <Link to="/">
        <button>Go to Products Page</button>
      </Link>
      
    </header>
  );
};

export default Header;