// Functional Component with Anonymous Function
import React from 'react';
import './Footer.css';
import MenuList from '../MenuList/MenuList';

const Footer = function () {
  const copyrightYear = 2023;

  // return JSX 
  return (
    <footer className="text-center">
      <hr />
      <MenuList />
      <p className="red-text green-text footer-purple-text">
        Copyright {copyrightYear} | Arun
      </p>
    </footer>
  );
}

export default Footer;