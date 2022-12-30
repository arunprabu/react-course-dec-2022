// Functional Component with Anonymous Function
import React from 'react';
import MenuList from '../MenuList/MenuList';

const Footer = function () {
  // return JSX 
  return (
    <footer className='text-center'>
      <hr />
      <MenuList />
      <p>Copyright 2022 | Arun</p>
    </footer>
  )
}

export default Footer;