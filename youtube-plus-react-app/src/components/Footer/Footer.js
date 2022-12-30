// Functional Component with Anonymous Function
import React from 'react';
import MenuList from '../MenuList/MenuList';

const Footer = function () {
  const copyrightYear = 2023;

  // return JSX 
  return (
    <footer className='text-center'>
      <hr />
      <MenuList />
      <p>Copyright {copyrightYear} | Arun</p>
    </footer>
  )
}

export default Footer;