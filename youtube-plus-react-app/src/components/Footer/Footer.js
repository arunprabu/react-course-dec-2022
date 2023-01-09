// Functional Component with Anonymous Function
import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css';
import MenuList from '../MenuList/MenuList';

const Footer = function( props) {
  const copyrightYear = 2023;

  // return JSX 
  return (
    <>
      <footer className="text-center">
        <hr />
        <MenuList />
        <p className="red-text green-text footer-purple-text">
          Copyright {copyrightYear} | {props.developerName}
        </p>
      </footer>
      <p className='text-center'>Built with Passion in Jan 2023</p>
    </>
  );
};
// Specifies the default values for props:
Footer.defaultProps = {
  developerName: 'Stranger'
};
Footer.propTypes = {
  developerName: PropTypes.string
};

export default Footer;