// Functional Component with Arrow Function 
import React from 'react';
import { Link } from 'react-router-dom';

const MenuList = () => {
  return (
    <ul className="navbar-nav me-auto mb-2 mb-md-0">
      <li className="nav-item">
        <Link to="/" className="nav-link active" aria-current="page">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/styled-comp-demo" className="nav-link">
          Styled Comp Demo
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/hoc-demo" className="nav-link">
          HOC Demo
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/about" className="nav-link">
          About Us
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/contact-us" className="nav-link">
          Contact Us
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/insta-feed" className="nav-link">
          Instagram Photos
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/hooks-demo" className="nav-link">
          Hooks Demo
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/products" className="nav-link">
          Products
        </Link>
      </li>
    </ul>
  );
};

export default MenuList;