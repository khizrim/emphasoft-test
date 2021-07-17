import React from 'react';

import { Link } from 'react-router-dom';

import logo from '../../images/logo.svg';

import './Header.css';

function Header(props) {
  const { onSignOut } = props;

  return (
    <header className="header">
      <Link className="header__logo-link" to="/">
        <img
          className="header__logo"
          src={logo}
          alt="Emphasoft Logo"
        />
      </Link>
      <button
        aria-label="Sign Out"
        className="header__signout-button"
        type="button"
        onClick={onSignOut}
      >
        Sign Out
      </button>
    </header>
  );
}

export default Header;
