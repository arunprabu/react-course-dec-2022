// Functional Component with Named Function
import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import MenuList from '../MenuList/MenuList';

function Header() {

  const cartData = useContext(CartContext);
  console.log(cartData.cartState);

  // must return JSX
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            YouTube Plus
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <MenuList />
            <button className="btn btn-danger">
              Cart ({cartData?.cartState?.length > 0? cartData?.cartState?.length: 0})
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
